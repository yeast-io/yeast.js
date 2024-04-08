import Request from './request.js';
import * as utils from './utils.js';
import Debug from 'debug';

const debug = Debug('bread:base');

class Base {

  protected request: Request;
  protected utils;

  constructor(protected options: { key: string, url?: string }) {
    this.options = options;
    this.request = new Request(options);
    this.utils = utils;
  }

  /**
   * @description Check if the response is successful
   * @param response
   */
  isSuccessful(response: { code: string, message: string }) {
    debug('base.isSuccessful(%o)', response);
    return response.code === '0' && (response.message || '').toLowerCase() === 'success';
  }
}

export default Base;
