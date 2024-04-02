import Base from './base.js';
import { IBunAudioCodecListResponse } from './interfaces/seed.type.js';
import { IBunCategoryListResponse } from './interfaces/seed.type.js';
import { IBunSeedSearchOptions, IBunSeedSearchResponse } from './interfaces/seed.type.js';


class Seed extends Base {

  /**
   * To get a list of audio codecs
   */
  public async audioCodecList() {
    const def = this.builder.find('audioCodecList');
    return this.request.post<IBunAudioCodecListResponse[]>(def.path, {}, { 'Content-Type': def.contentType });
  }

  public async categoryList() {
    const def = this.builder.find('categoryList');
    return this.request.post<IBunCategoryListResponse>(def.path, {}, { 'Content-Type': def.contentType });
  }

  public async collection() {
  }

  public async createOredit() {
  }

  public async detail() {
  }

  public async doubanInfo() {
  }

  public async files() {
  }

  public async genDlToken() {
  }

  public async imdbInfo() {
  }

  public async mediumList() {
  }

  public async peers() {
  }

  public async processingList() {
  }

  public async queryTorrentTrackerHistory() {
  }

  public async requestReseed() {
  }

  public async rewardStatus() {
  }

  public async sayThank() {
  }


  /**
   * To search seeds through M-team's API
   * @param { IBunSeedSearchOptions } options
   */
  public async search(options?: IBunSeedSearchOptions) {
    options = options || {};
    if (!options.mode) {
      throw new Error('options.mode is required');
    }
    options.pageSize = options.pageSize || 100;
    options.pageNumber = options.pageNumber || 1;
    options.sortDirection = options.sortDirection || 'desc';
    options.visible = options.visible || 1;
    const def = this.builder.find('search');
    return this.request.post<IBunSeedSearchResponse>(def.path, options, {'Content-Type': def.contentType});
  }

  public async sendReward() {}

  public async sourceList() {}

  public async standardList() {}

  public async teamList() {}

  public async thanksStatus() {}

  public async videoCodecList() {}

  public async viewHits() {}
}

export default Seed;
