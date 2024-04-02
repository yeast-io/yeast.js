import Request from './request.js';

class Base {

  protected request: Request;

  constructor(protected options: { key: string, url?: string }) {
    this.options = options;
    this.request = new Request(options);
  }

}

export default Base;
