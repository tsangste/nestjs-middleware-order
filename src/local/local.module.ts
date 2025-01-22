import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LocalService } from './local.service';
import { LocalController } from './local.controller';
import { LocalMiddleware } from './local.middleware';

@Module({
  controllers: [LocalController],
  providers: [LocalService],
})
export class LocalModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LocalMiddleware).forRoutes({
      path: '/*splat',
      method: RequestMethod.ALL,
    });
  }
}
