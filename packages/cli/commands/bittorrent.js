"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qbittorrent_1 = require("@ctrl/qbittorrent");
class Bittorrent {
    config;
    client = {};
    constructor(config) {
        this.config = config;
        this.config = config;
        this.client = new qbittorrent_1.QBittorrent({
            baseUrl: this.config.bittorrent?.url,
            username: this.config.bittorrent?.username,
            password: this.config.bittorrent?.password
        });
    }
    async add(torrentId) {
        await this.client.getPreferences().then((res) => {
            console.info(res, torrentId);
        });
    }
}
exports.default = Bittorrent;
