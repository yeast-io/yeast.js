import { IConfig } from './config.js';
import { QBittorrent } from '@ctrl/qbittorrent';

class Bittorrent {

  protected client: QBittorrent = {} as QBittorrent;

  constructor(protected config: IConfig) {
    this.config = config;
    this.client = new QBittorrent({
      baseUrl: this.config.bittorrent?.url,
      username: this.config.bittorrent?.username,
      password: this.config.bittorrent?.password
    });
  }

  public async add(torrentId: string | number) {
    await this.client.getPreferences().then((res) => {
      console.info(res, torrentId);
    });
  }
}

export default Bittorrent;
