import { ConfigService } from '@nestjs/config';
export declare class SeedrService {
    private configService;
    private readonly apiUrl;
    constructor(configService: ConfigService);
    addTorrent(magnetLink: string): Promise<any>;
}
