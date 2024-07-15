import { $t } from 'src/i18n';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Signin, Signup, UpdatePassword, VerifyOtpPayload } from './users.dto';
import { hash, compare } from 'bcrypt';
import { UserSession } from './users.sessions';
import { OtpService } from 'src/otp/otp.service';
import { ConversationsService } from 'src/conversations/conversations.service';
import { EncryptionService } from 'src/encryption/encryption.service';

export const USER_SELECT_FIELDS = {
  id: true,
  email: true,
  gender: true,
  photo: true,
  nationality: true,
  profession: true,
  username: true,
  publicKey: true,
};

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private session: UserSession,
    private otp: OtpService,
    private conversation: ConversationsService,
    private encryption: EncryptionService,
  ) {}

  async signup(data: Signup) {
    const existingUser = await this.prisma.user.findFirst({
      where: { OR: [{ email: data.email }, { username: data.username }] },
    });

    if (existingUser) {
      throw new ConflictException($t('USER_ALREADY_EXISTS'));
    }

    const hashedPassword = await hash(data.password, 3);
    data.password = hashedPassword;

    const { publicKey, privateKey } = await this.encryption.generateKeys();

    const user = await this.prisma.user.create({
      data: { ...data, privateKey, publicKey },
      select: USER_SELECT_FIELDS,
    });
    this.conversation.registerNewUser(user.id);
    return user;
  }

  async signin(data: Signin) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new UnauthorizedException($t('BAD_CREDENTIALS'));
    }

    const isValidPass = await compare(data.password, user.password);

    if (!isValidPass) {
      throw new UnauthorizedException($t('BAD_CREDENTIALS'));
    }

    delete user.password;
    const sessionToken = this.session.registerUser(user);
    return { user, authToken: sessionToken };
  }

  logout(token: string) {
    this.session.removeUser(token);
  }

  async forgotPassword(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException($t('USER_NOT_FOUND'));
    }

    await this.otp.sendOtpByEmail(user);
    return { userId: user.id };
  }

  async verifyOtp({ userId, value }: VerifyOtpPayload) {
    await this.otp.verifyOtp(userId, value);
    return { isValid: true };
  }

  async updatePassword({ userId, password }: UpdatePassword) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    const hashedPassword = await hash(password, 3);
    return await this.prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
      select: USER_SELECT_FIELDS,
    });
  }
}
