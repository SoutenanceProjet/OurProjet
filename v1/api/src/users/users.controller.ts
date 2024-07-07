import { CurrentUser } from './../decorators/current-user.decorator';
import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Signin, Signup } from './users.dto';
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
}
