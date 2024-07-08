import { homedir } from 'node:os';
import { join } from 'node:path';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';


const HOME_DIR = join(homedir(), '.yeast.js/');
const CONFIG_FILE = join(HOME_DIR, 'config.json');


/**
 * @description Interface for the configuration file
 * @interface IConfig
 * @property {string} key - The api key
 * @property {string} url - The api url
 */
export interface IConfig {
  key: string;
  url: string;
  bittorrent?: {
    username: string;
    password: string;
    url: string;
  };
}



export class Config {

  public map: IConfig;

  constructor() {
    this.map = {
      key: '', url: '',
      bittorrent: { username: '', password: '', url: '' }
    };
    this.initialize();
  }

  public site(key: string, url: string) {
    this.map.key = key;
    this.map.url = url;
    return this;
  }

  public bittorrent(username: string, password: string, url: string) {
    this.map.bittorrent = { username, password, url };
    return this;
  }

  public save() {
    writeFileSync(CONFIG_FILE, JSON.stringify(this.map), 'utf-8');
    return this;
  }

  public show() {
    console.info(this.map);
  }

  public loadConfig() {
    const m = readFileSync(CONFIG_FILE, 'utf-8');
    return JSON.parse(m);
  }

  protected initialize() {
    if (existsSync(CONFIG_FILE)) {
      this.map = this.loadConfig();
    } else {
      // create config file
      writeFileSync(CONFIG_FILE, JSON.stringify(this.map), 'utf-8');
    }
  }

}


