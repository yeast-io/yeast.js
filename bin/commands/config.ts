import { homedir } from 'node:os';
import { join } from 'node:path';
import { access, mkdir, writeFile } from 'node:fs/promises';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { table } from 'table';
import chalk from 'chalk';

const HOME_DIR = join(homedir(), '.yeast.js/');
const CONFIG_FILE = join(HOME_DIR, 'config.json');

const exists = async (path: string) => {
  try {
    await access(path);
    return true;
  } catch (err) {
    return false;
  }
};


/**
 * @description Interface for the configuration file
 * @interface IConfig
 * @property {string} key - The api key
 * @property {string} url - The api url
 */
interface IConfig {
  key: string;
  url: string;
}


export const initialize = async () => {
  if (await exists(HOME_DIR)) return true;

  await mkdir(HOME_DIR, { recursive: true });
  await writeFile(
    CONFIG_FILE,
    JSON.stringify({ key: '', url: '' })
  );
}


export const addConfig = (key: string, url: string) => {
  if (existsSync(CONFIG_FILE)) {
    return updateConfig(key, url);
  }
  writeFileSync(CONFIG_FILE, JSON.stringify({ key, url }), 'utf-8');
  outputConfig(loadConfig());
}

export const updateConfig = (key: string, url: string) => {
  const config = readFileSync(CONFIG_FILE, 'utf-8');
  const objs: IConfig = JSON.parse(config);
  objs.key = key;
  objs.url = url;
  writeFileSync(CONFIG_FILE, JSON.stringify(objs), 'utf-8');
  outputConfig(loadConfig());
}

export const loadConfig = (): IConfig => {
  const config = readFileSync(CONFIG_FILE, 'utf-8');
  return JSON.parse(config);
}

export const outputConfig = (configs: IConfig) => {
  const data = [
    Object.keys(configs).map((key) => chalk.green(key.toUpperCase())),
    Object.values(configs).map((value) => {
      if (!value) return chalk.red('Not Set');
      return value;
    })
  ];
  console.info(table(data, {
    columnDefault: { width: 36 },
    columns: [
      { alignment: 'center' },
      { alignment: 'center' }
    ]
  }));
}
