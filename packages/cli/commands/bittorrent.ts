import fetch from 'node-fetch';
import Yeast from 'yeast.js';
import { IConfig } from './config.js';
import { QBittorrent } from '@ctrl/qbittorrent';
import chalk from 'chalk';

class Bittorrent {

  protected qBittorrent: QBittorrent = {} as QBittorrent;
  protected yeast: Yeast;

  constructor(protected config: IConfig) {
    this.config = config;
    this.qBittorrent = new QBittorrent({
      baseUrl: this.config.bittorrent?.url,
      username: this.config.bittorrent?.username,
      password: this.config.bittorrent?.password
    });
    this.yeast = new Yeast(this.config);
  }

  public async add(torrentId: number) {
    // const preference = await this.qBittorrent.getPreferences();
    const url = await this.yeast.seed.genDlToken(torrentId);
    const buf = await this.downloadTorrent(url, torrentId);
    const isAdded = await this.qBittorrent.addTorrent(buf);
    console.info(
      chalk.yellow(torrentId),
      isAdded ? chalk.green('Succeeds') : chalk.red('Fails')
    );
  }

  private async downloadTorrent(url: string, torrentId: number) {
    const response = await fetch(url);
    if (response.status === 302 || response.status === 301) {
      return this.downloadTorrent(response.headers.get('location') as string, torrentId);
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
  }
}

export default Bittorrent;
