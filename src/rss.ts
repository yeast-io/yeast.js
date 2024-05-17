import Base from './base.js';
import { ReallySimpleSyndicationInput } from './interfaces/rss/input.type.js';


class ReallySimpleSyndication extends Base {

  /**
   * @description Generate a link for RSS feed
   * @param { ReallySimpleSyndicationInput } options - The options to generate the link
   * @returns { Promise<{ readUrl: string, dlUrl: string }> } The RSS feed links
   */
  public async genlink(options?: ReallySimpleSyndicationInput): Promise<{ readUrl: string, dlUrl: string }> {
    options = options || {};
    options.audioCodecs = options.audioCodecs || [];
    options.categories = options.categories || [];
    options.labels = options.labels || 0;
    options.onlyFav = options.onlyFav || 'true';
    options.pageSize = options.pageSize || 50;
    options.pageNumber = options.pageNumber || 1;
    options.processings = options.processings || [];
    options.standards = options.standards || [];
    options.teams = options.teams || [];
    options.tkeys = options.tkeys || [];
    options.videoCodecs = options.videoCodecs || [];

    return this.request.post<{ readUrl: string, dlUrl: string}>({ method: 'genlink', body: options, type: 'body' });
  }

}


export default ReallySimpleSyndication;
