import Base from './base.js';
import { MissingArgumentError } from './errors.js';
import { BannedInput } from './interfaces/system/input.type.js';
import { BannedOutput } from './interfaces/system/output.type.js';

// import { Response } from './request.js';


class System extends Base {


  /**
   * @description Get the list of banned users
   * @param { BannedInput } options
   * @param { number } [options.pageSize=100] - How many items per page
   * @param { number } [options.pageNumber=1] - Which page number you've requested
   * @param { string } [options.lastId]
   * @param { string } [options.keyword]
   */
  public async banlogs(options: BannedInput) {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('BannedInput');
    options.pageSize = options.pageSize || 100;
    options.pageNumber= options.pageNumber || 1;
    if (options.lastId && this.utils.isEmpty(options.lastId)) {
      delete options.lastId;
    }
    if (options.keyword && this.utils.isEmpty(options.keyword)) {
      delete options.keyword;
    }
    return this.request.post<BannedOutput>({ method: 'banlogs', body: options, type: 'query' });
  }
}


export default System;
