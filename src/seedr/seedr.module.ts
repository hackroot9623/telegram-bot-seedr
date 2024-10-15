import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SeedrService } from './seedr.service';

@Module({
  imports: [ConfigModule],
  providers: [SeedrService],
  exports: [SeedrService],
})
export class SeedrModule {}