import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class SeedrService {
  private readonly apiUrl = 'https://www.seedr.cc/api/rest';

  constructor(private configService: ConfigService) {}

  async addTorrent(magnetLink: string) {
    const token = this.configService.get<string>('SEEDR_TOKEN');
    const response = await axios.post(`${this.apiUrl}/torrent/add`, null, {
      params: {
        access_token: token,
        torrent_magnet: magnetLink,
      },
    });

    if (response.data.result === 'success') {
      return response.data.torrent;
    } else {
      throw new Error('Failed to add torrent');
    }
  }
}