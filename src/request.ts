import fetch from 'node-fetch';
import Debug from 'debug';
import Builder from './definition.js';
import FormData from 'form-data';
import { Methods } from './definition.js';
import { AbortError } from 'node-fetch';
import { RequestInit } from 'node-fetch';
import { URL } from 'node:url';
import { M_TEAM_API_URL } from './constant.js';
import { ReadStream } from 'node:fs';

const requestUrl = Debug('bread:request:url');
const result = Debug('bread:response:result');

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
export interface Response<R> {
  code: string;
  message: string;
  data: R;
}

/**
 * @description This is a generic request options interface
 * @interface RequestOptions
 * @property { String } key - The API key
 * @property { String } [url] - The base url of the API. In Default: It'd be the test2 environment of M-team
 * @property { Number } [timeout] - The timeout of the request. In Default: 10000
 */
export interface RequestOptions {
  key: string;
  url?: string;
  timeout?: number;
}

export interface QueryOptions {
  method: Methods;
  type?: 'query' | 'body' | 'form';
  body?: { [key: string]: any };
  headers?: { [key: string]: string };
  unwrap?: boolean;
  uploadFile?: { key: string, file: ReadStream };
}

const DEFAULT_TIMEOUT = 10000;
const DEFAULT_CONTENT_TYPE = 'application/x-www-form-urlencoded';

class Request {

  protected builder: Builder;

  constructor(protected options: RequestOptions) {
    this.options = options || {};
    if (Object.keys(this.options).length <= 0) {
      throw new Error('options must be an object of type RequestOptions');
    }
    this.options.url = options.url || M_TEAM_API_URL;
    this.builder = new Builder();
  }

  /**
   * @description Send a POST request
   * @param { QueryOptions } options
   *  - method: The method name of the request.
   *  - [type]: We supported two types of request: query and body. In Default: body
   *  - [body]: The body of the request.
   *  - [headers]: The headers of the request.
   *  - [unwrap]: Whether to unwrap the response. In Default: true
   */
  public async post<T = Record<string, unknown>>(options: QueryOptions): Promise<T> {
    if (Object.keys(options || {}).length <= 0) {
      throw new Error('options must be an object of type QueryOptions');
    }
    options.unwrap = !Object.prototype.hasOwnProperty.call(options, 'unwrap') ? true : options.unwrap;
    const iba = this.builder.find(options.method);
    if (!iba) {
      throw new Error(`Method ${options.method} not found`);
    }

    const headers: any = { 'x-api-key': this.options.key, ...(options.headers || {})};

    /**
     * @Warning:
     * When using FormData to submit POST requests using XMLHttpRequest or the Fetch API with
     * the multipart/form-data content type (e.g., when uploading files and blobs to the server),
     * do not explicitly set the Content-Type header on the request.
     *
     * Doing so will prevent the browser from being able to set the Content-Type header with
     * the boundary expression it will use to delimit form fields in the request body.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
     */
    if (options.type !== 'form') {
      headers['Content-Type'] = iba.contentType || DEFAULT_CONTENT_TYPE;
    }

    const params: RequestInit = { method: 'POST', headers };

    let url = this.canonical(iba.path);
    if (options.type === 'query') {
      const query = new URLSearchParams(options.body).toString();
      url = this.canonical(`${iba.path}?${query}`);
    } else if (options.type === 'form') {
      const form = new FormData();
      if (options.uploadFile) {
        form.append(options.uploadFile.key, options.uploadFile.file);
      }
      for (const key in options.body) {
        form.append(key, String(options.body[key]));
      }
      params.body = form;
    } else {
      params.body = JSON.stringify(options.body || {});
    }

    const controller = new AbortController();
    params.signal = controller.signal;
    const timeout = this.options.timeout || DEFAULT_TIMEOUT;
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    requestUrl('POST => %s', url);
    const response = await fetch(url, params).catch(err => {
      if (err instanceof AbortError) {
        throw new Error('Request aborted');
      }
      throw err;
    });
    const resp = await response.json() as Response<T>;
    clearTimeout(timeoutId);
    result('RESULT => %j', resp);
    return (options.unwrap ? this.unwrap<T>(resp) : resp) as T;
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
   * @description To make the url as a canonical form
   * @param { String } path
   * @return { String }
   * @protected
   */
  protected canonical(path: string): string {
    return new URL(path, this.options.url).toString();
  }


  protected unwrap<R>(resp: Response<R>): R {
    return resp.data;
  }
}

export default Request;
