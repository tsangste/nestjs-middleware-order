import { Injectable, Logger, type NestMiddleware } from '@nestjs/common';

@Injectable()
export class GlobalMiddleware implements NestMiddleware {
  private readonly logger = new Logger(GlobalMiddleware.name);

  use(req: unknown, res: unknown, next: (...args: any[]) => void) {
    this.logger.log('GlobalMiddleware');
    next();
  }
}
