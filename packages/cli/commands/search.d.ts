import Yeast from 'yeast.js';
import { Indexable, ColumnUserConfig } from 'table';
import { IConfig } from './config.js';
declare class Search {
    protected config: IConfig;
    protected readonly yeast: Yeast;
    protected readonly headers: string[];
    protected readonly columns: Indexable<ColumnUserConfig>;
    constructor(config: IConfig);
    peers(torrentId: number): Promise<void>;
    packages(): Promise<void>;
    movies(mode: 'normal', keyword?: string | null, limit?: number): Promise<void>;
}
export default Search;
