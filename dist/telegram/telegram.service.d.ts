import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SeedrService } from '../seedr/seedr.service';
export declare class TelegramService implements OnModuleInit {
    private configService;
    private seedrService;
    private bot;
    constructor(configService: ConfigService, seedrService: SeedrService);
    onModuleInit(): void;
}
