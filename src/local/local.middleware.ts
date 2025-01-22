import { Injectable, Logger, type NestMiddleware } from '@nestjs/common';

@Injectable()
export class LocalMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LocalMiddleware.name);

  use(req: unknown, res: unknown, next: (...args: any[]) => void) {
    this.logger.log('LocalMiddleware');
    next();
  }
}
