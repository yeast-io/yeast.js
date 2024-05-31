import Base from './base.js';
import { RequestOptions } from './request.js';

class Subtitle extends Base {

  public readonly subtitleSearch: () => void;
  public readonly subtitleLangs: () => void;


  constructor(protected options: RequestOptions) {
    super(options);

    this.subtitleSearch = this.search.bind(this);
    this.subtitleLangs = this.langs.bind(this);
  }


  public async search() {}

  public async langs() {}

}

export default Subtitle;
