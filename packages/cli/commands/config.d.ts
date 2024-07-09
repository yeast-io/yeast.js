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
export declare class Config {
    map: IConfig;
    private loaded;
    constructor();
    site(key: string, url: string): this;
    bittorrent(username: string, password: string, url: string): this;
    save(): this;
    show(): void;
    loadConfig(): any;
    initialize(): void;
    check(): Error | null;
    checkBittorrent(): Error | undefined;
}
