import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserSession } from './users.sessions';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UserSession],
  controllers: [UsersController],
  exports: [UsersService, UserSession],
})
export class UsersModule {}
