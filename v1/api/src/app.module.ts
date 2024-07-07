import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { SecurityMiddleware } from './middlewares/security.middleware';
import { I18nModule } from './i18n/i18n.module';

@Module({
  imports: [PrismaModule, UsersModule, I18nModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SecurityMiddleware)
      .exclude(
        { path: '/users/signin', method: RequestMethod.POST },
        { path: '/users/signup', method: RequestMethod.POST },
      )
      .forRoutes('*');
  }
}
