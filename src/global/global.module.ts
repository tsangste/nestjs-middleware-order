import {
  Global,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { GlobalMiddleware } from './global.middleware';

@Global()
@Module({})
export class GlobalModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GlobalMiddleware).forRoutes({
      path: '/*splat',
      method: RequestMethod.ALL,
    });
  }
}
