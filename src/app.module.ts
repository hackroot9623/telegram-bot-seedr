import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegramModule } from './telegram/telegram.module';
import { SeedrModule } from './seedr/seedr.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegramModule,
    SeedrModule,
  ],
})
export class AppModule {}