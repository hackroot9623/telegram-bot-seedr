import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegramService } from './telegram.service';
import { SeedrModule } from '../seedr/seedr.module';

@Module({
  imports: [ConfigModule, SeedrModule],
  providers: [TelegramService],
})
export class TelegramModule {}