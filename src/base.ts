import Request from './request.js';
import * as utils from './utils.js';

class Base {

  protected request: Request;
  protected utils;

  constructor(protected options: { key: string, url?: string }) {
    this.options = options;
    this.request = new Request(options);
    this.utils = utils;
  }

}

export default Base;
