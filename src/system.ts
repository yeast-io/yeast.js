import Base from './base.js';
import {
  MissingArgumentError, UnimplementedMethodError
} from './errors.js';
import { BannedInput } from './interfaces/system/input.type.js';
import {
  BannedOutput, CountryListOutput, LanguageOutput,
  NewsOutput, StaffOutput, StateOutput, SystemConfigOutput
} from './interfaces/system/output.type.js';

import { Response } from './request.js';


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

  /**
   * @description Get the list of countries
   */
  public async countryList() {
    return this.request.post<CountryListOutput[]>({ method: 'countryList' });
  }

  /**
   * @description This method has not been implemented yet
   * @throws { UnimplementedMethodError }
   * @deprecated
   */
  public async getConf() {
    throw new UnimplementedMethodError('getConf');
  }

  /**
   * @description Say hello to the server
   */
  public async hello() {
    return this.request.post<Response<null>>({ method: 'hello', unwrap: false })
      .then(this.isSuccessful.bind(this));
  }

  /**
   * @description Get the region of IP address
   * @param { string } address - The IP address
   */
  public async ip(address: string) {
    return this.request.post<string>({
      method: 'ip', type: 'form', body: { ip: address }
    });
  }

  /**
   * @description Get the ASN of the IP address
   * @param address
   */
  public async ipASN(address: string) {
    return this.request.post<string>({
      method: 'ipASN', type: 'form', body: { ip: address }
    });
  }

  /**
   * @description Get the list of languages which are supported by the server
   */
  public async langs() {
    return this.request.post<LanguageOutput[]>({ method: 'langs' });
  }

  /**
   * @description Get the list of news that issued by the server
   */
  public async news() {
    return this.request.post<NewsOutput[]>({ method: 'news' });
  }


  /**
   * @description Get the list of staff members and their roles
   */
  public async staff() {
    return this.request.post<StaffOutput>({ method: 'staff' });
  }

  /**
   * @description Get the state of the server
   */
  public async state() {
    return this.request.post<StateOutput>({ method: 'state' });
  }

  /**
   * @description Get the system configuration
   */
  public async sysConf() {
    return this.request.post<SystemConfigOutput>({ method: 'sysConf' });
  }


  /**
   * @description This method has not been implemented yet
   * @throws { UnimplementedMethodError }
   * @deprecated
   */
  public async top() {
    throw new UnimplementedMethodError('top');
  }
}


export default System;
