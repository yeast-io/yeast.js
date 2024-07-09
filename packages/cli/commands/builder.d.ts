import Search from './search.js';
import Member from './member.js';
import Bittorrent from './bittorrent.js';
import { Command } from 'commander';
import { Config } from './config.js';
interface IClient {
    search: Search;
    member: Member;
    config: Config;
    bittorrent: Bittorrent;
}
declare class BuildInternalCommands {
    protected configInstance: Config;
    protected instance: IClient;
    constructor(configInstance: Config);
    config(program: Command): Promise<void>;
    search(program: Command): Promise<void>;
    peers(program: Command): Promise<void>;
    labState(program: Command): Promise<void>;
    labSwitch(program: Command): Promise<void>;
    bittorrent(program: Command): Promise<void>;
}
export default BuildInternalCommands;
