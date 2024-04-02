import fetch from 'node-fetch';
import Debug from 'debug';
import { AbortError } from 'node-fetch';
import { RequestInit } from 'node-fetch';
import { URL } from 'node:url';
import { M_TEAM_API_URL } from './constant.js';

const debug = Debug('m:bun:request');

/**
 * @description This is a generic response interface of M-team's API, and you can specify the type of the data
 * @interface Response
 * @property { Number } code - The status code of the response
 *  - 200: OK
 *  - 400: Bad Request
 *  - 404: Not Found
 * @property { String } message
 * @property { R } data
 */
export interface BunResponse<R> {
  code: string;
  message: string;
  data: R;
}

export interface RequestOptions {
  key: string;
  url?: string;
  timeout?: number;
}

const DEFAULT_TIMEOUT = 10000;
const DEFAULT_CONTENT_TYPE = 'application/x-www-form-urlencoded';

class Request {

  constructor(protected options: RequestOptions) {
    this.options = options || {};
    if (Object.keys(this.options).length <= 0) {
      throw new Error('options must be an object of type RequestOptions');
    }
    this.options.url = options.url || M_TEAM_API_URL;
  }

  /**
   * @description Send a POST request
   * @param path
   * @param body
   * @param headers
   * @return { Promise<T> }
   */
  public async post<T = Record<any, any>>(
    path: string, body: { [key: string]: any } = {}, headers: { [key: string]: string } = {}
  ): Promise<T> {
    if (!path) {
      throw new Error('path is required');
    }

    if (!headers.hasOwnProperty('Content-Type')) {
      headers['Content-Type'] = DEFAULT_CONTENT_TYPE;
    }

    headers['x-api-key'] = this.options.key;
    const options: RequestInit = { method: 'POST', headers: { ...headers } };
    if (Object.keys(body).length > 0) {
      options.body = JSON.stringify(body);
    }

    const controller = new AbortController();
    options.signal = controller.signal;
    const timeout = this.options.timeout || DEFAULT_TIMEOUT;
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const url = this.combineUrl(path);
    debug('POST %s', url);
    debug('OPTIONS %j', options);
    const response = await fetch(url, options).catch(err => {
      if (err instanceof AbortError) {
        throw new Error('Request aborted');
      }
      throw err;
    });
    const resp = await response.json() as BunResponse<T>;
    clearTimeout(timeoutId);
    return this.unwrap<T>(resp) as T;
  }

  /**
   * @description Abort the request after a certain amount of time
   * @param timeout
   * @param controller
   * @protected
   */
  protected async timeout(timeout: number, controller: AbortController) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        controller.abort();
        reject(new Error('Request timeout'));
      }, timeout);
    });
  }

  /**
   * @description Combine the base url with the path
   * @param { String } path
   * @return { String }
   * @protected
   */
  protected combineUrl(path: string): string {
    return new URL(path, this.options.url).toString();
  }


  protected unwrap<R>(resp: BunResponse<R>): R {
    return resp.data;
  }
}

export default Request;
