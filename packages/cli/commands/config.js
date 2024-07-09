"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const node_os_1 = require("node:os");
const node_path_1 = require("node:path");
const node_fs_1 = require("node:fs");
const HOME_DIR = (0, node_path_1.join)((0, node_os_1.homedir)(), '.yeast.js/');
const CONFIG_FILE = (0, node_path_1.join)(HOME_DIR, 'config.json');
class Config {
    map;
    loaded = false;
    constructor() {
        this.map = {
            key: '', url: '',
            bittorrent: { username: '', password: '', url: '' }
        };
    }
    site(key, url) {
        this.map.key = key;
        this.map.url = url;
        return this;
    }
    bittorrent(username, password, url) {
        this.map.bittorrent = { username, password, url };
        return this;
    }
    save() {
        (0, node_fs_1.writeFileSync)(CONFIG_FILE, JSON.stringify(this.map), 'utf-8');
        return this;
    }
    show() {
        console.info(this.map);
    }
    loadConfig() {
        if (this.loaded) {
            return this.map;
        }
        const m = (0, node_fs_1.readFileSync)(CONFIG_FILE, 'utf-8');
        this.loaded = true;
        return JSON.parse(m);
    }
    initialize() {
        if ((0, node_fs_1.existsSync)(CONFIG_FILE)) {
            this.map = this.loadConfig();
        }
        else {
            (0, node_fs_1.writeFileSync)(CONFIG_FILE, JSON.stringify(this.map), 'utf-8');
        }
    }
    check() {
        if (!this.map.key || !this.map.url) {
            return new Error('Please setup the config first.');
        }
        return null;
    }
    checkBittorrent() {
        if (!this.map.bittorrent?.username || !this.map.bittorrent?.password) {
            return new Error('Please setup the bittorrent config first.');
        }
        if (!this.map.bittorrent?.url) {
            return new Error('Please setup the bittorrent url first.');
        }
    }
}
exports.Config = Config;
