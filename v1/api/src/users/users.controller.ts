import { CurrentUser } from './../decorators/current-user.decorator';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ForgotPassword,
  Signin,
  Signup,
  UpdatePassword,
  VerifyOtpPayload,
} from './users.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Session } from './users.typings';

@Controller('users')
@ApiTags('Utilisateurs')
@ApiBearerAuth()
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('signup')
  async signup(@Body() data: Signup) {
    return await this.service.signup(data);
  }

  @Post('signin')
  async signin(@Body() data: Signin) {
    return await this.service.signin(data);
  }

  @Post('logout')
  async logout(@CurrentUser() { token }: Session) {
    return this.service.logout(token);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() { email }: ForgotPassword) {
    return this.service.forgotPassword(email);
  }

  @Post('verify-otp')
  async verifyOtp(@Body() data: VerifyOtpPayload) {
    return this.service.verifyOtp(data);
  }

  @Post('update-password')
  async updatePassword(@Body() data: UpdatePassword) {
    return this.service.updatePassword(data);
  }

  @Get('me')
  async me(@CurrentUser() { user }: Session) {
    return user;
  }
}
