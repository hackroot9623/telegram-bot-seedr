"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const telegraf_1 = require("telegraf");
const seedr_service_1 = require("../seedr/seedr.service");
let TelegramService = class TelegramService {
    constructor(configService, seedrService) {
        this.configService = configService;
        this.seedrService = seedrService;
        this.bot = new telegraf_1.Telegraf(this.configService.get('TELEGRAM_BOT_TOKEN'));
    }
    onModuleInit() {
        this.bot.command('start', (ctx) => ctx.reply('Welcome! Send me a torrent link to add it to Seedr.cc'));
        this.bot.on('text', async (ctx) => {
            const torrentLink = ctx.message.text;
            try {
                const result = await this.seedrService.addTorrent(torrentLink);
                ctx.reply(`Torrent added successfully! Folder ID: ${result.id}`);
            }
            catch (error) {
                ctx.reply('Error adding torrent. Please check the link and try again.');
            }
        });
        this.bot.launch();
    }
};
TelegramService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        seedr_service_1.SeedrService])
], TelegramService);
exports.TelegramService = TelegramService;
//# sourceMappingURL=telegram.service.js.map