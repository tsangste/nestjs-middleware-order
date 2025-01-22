import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalModule } from './global/global.module';
import { LocalModule } from './local/local.module';

@Module({
  imports: [GlobalModule, LocalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
