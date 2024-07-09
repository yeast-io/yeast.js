import { IConfig } from './config.js';
import { QBittorrent } from '@ctrl/qbittorrent';
declare class Bittorrent {
    protected config: IConfig;
    protected client: QBittorrent;
    constructor(config: IConfig);
    add(torrentId: string | number): Promise<void>;
}
export default Bittorrent;
