import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Telegraf } from 'telegraf';
import { SeedrService } from '../seedr/seedr.service';

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: Telegraf;

  constructor(
    private configService: ConfigService,
    private seedrService: SeedrService,
  ) {
    this.bot = new Telegraf(this.configService.get<string>('TELEGRAM_BOT_TOKEN'));
  }

  onModuleInit() {
    this.bot.command('start', (ctx) => ctx.reply('Welcome! Send me a torrent link to add it to Seedr.cc'));

    this.bot.on('text', async (ctx) => {
      const torrentLink = ctx.message.text;
      try {
        const result = await this.seedrService.addTorrent(torrentLink);
        ctx.reply(`Torrent added successfully! Folder ID: ${result.id}`);
      } catch (error) {
        ctx.reply('Error adding torrent. Please check the link and try again.');
      }
    });

    this.bot.launch();
  }
}