import Yeast from 'yeast.js';
import { IConfig } from './config.js';
declare class Member {
    protected config: IConfig;
    protected readonly yeast: Yeast;
    constructor(config: IConfig);
    show(): Promise<void>;
    switch(state: 'ON' | 'OFF'): Promise<void>;
}
export default Member;
