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
exports.SeedrService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
let SeedrService = class SeedrService {
    constructor(configService) {
        this.configService = configService;
        this.apiUrl = 'https://www.seedr.cc/api/rest';
    }
    async addTorrent(magnetLink) {
        const token = this.configService.get('SEEDR_TOKEN');
        const response = await axios_1.default.post(`${this.apiUrl}/torrent/add`, null, {
            params: {
                access_token: token,
                torrent_magnet: magnetLink,
            },
        });
        if (response.data.result === 'success') {
            return response.data.torrent;
        }
        else {
            throw new Error('Failed to add torrent');
        }
    }
};
SeedrService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SeedrService);
exports.SeedrService = SeedrService;
//# sourceMappingURL=seedr.service.js.map