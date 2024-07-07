import { $t } from 'src/i18n';
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Signin, Signup } from './users.dto';
import { hash, compare } from 'bcrypt';
import { UserSession } from './users.sessions';

const USER_SELECT_FIELDS = {
  id: true,
  email: true,
  gender: true,
  photo: true,
  nationality: true,
  profession: true,
  username: true,
};

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private session: UserSession,
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

    return await this.prisma.user.create({ data, select: USER_SELECT_FIELDS });
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
}
