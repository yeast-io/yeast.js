import Builder from './definition.js';
import Request from './request.js';

class Base {

  protected key: string;
  protected builder: Builder;
  protected request: Request;

  constructor(protected options: { key: string, url?: string }) {
    this.options.key = options.key;
    this.builder = new Builder();
    this.request = new Request(options);
    this.key = this.options.key;
  }

}

export default Base;
