import Base from './base.js';
import { RequestOptions } from './request.js';
import { SubtitleLangOutput, SubtitleSearchOutput } from './interfaces/subtitle/output.type.js';
import { SubtitleSearchInput } from './interfaces/subtitle/input.type.js';

class Subtitle extends Base {

  public readonly subtitleSearch: (options: SubtitleSearchInput) => Promise<SubtitleSearchOutput>;
  public readonly subtitleLangs: () => Promise<SubtitleLangOutput[]>;
  public readonly subtitleGenlink: (subtitleId: string | number) => Promise<string>;

  constructor(protected options: RequestOptions) {
    super(options);

    this.subtitleSearch = this.search.bind(this);
    this.subtitleLangs = this.langs.bind(this);
    this.subtitleGenlink = this.genlink.bind(this);
  }


  /**
   * @description To generate an uri which has been encoded in base64
   * @param { string | number } subtitleId
   */
  public async genlink(subtitleId: string | number) {
    return this.request.post<string>({
      method: 'subtitleGenlink', body: { id: subtitleId },
      type: 'form'
    });
  }

  /**
   * @description To search for subtitles
   * @param { SubtitleSearchInput } [options]
   * @alias subtitleSearch
   */
  public async search(options?: SubtitleSearchInput): Promise<SubtitleSearchOutput> {
    options = options || {};
    options.keyword = options.keyword || '';
    options.pageSize = options.pageSize || 100;
    options.pageNumber = options.pageNumber || 1;

    return this.request.post<SubtitleSearchOutput>({ method: 'subtitleSearch', body: options });
  }

  /**
   * @description To get the list of subtitle languages
   * @alias subtitleLangs
   */
  public async langs(): Promise<SubtitleLangOutput[]> {
    return this.request.post<SubtitleLangOutput[]>({ method: 'subtitleLangs' });
  }

}

export default Subtitle;
