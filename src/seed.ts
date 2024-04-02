import Base from './base.js';
import {
  IBunAudioCodecListOutput, IBunCategoryListOutput, IBunSearchOutput
} from './interfaces/seed/output.type.js';
import {
  IBunTorrentSearchInput, IBunTorrentUploadFormInput
} from './interfaces/seed/input.type.js';


class Seed extends Base {

  /**
   * To get a list of audio codecs
   */
  public async audioCodecList() {
    return this.request.post<IBunAudioCodecListOutput[]>({ method: 'audioCodecList' });
  }

  public async categoryList() {
    return this.request.post<IBunCategoryListOutput>({ method: 'categoryList' });
  }

  /**
   * @description To get a collection
   *
   * @param { number } id
   * @param { boolean } [make=false] - Whether to make the collection
   */
  public async collection(id: number, make: boolean = false) {
    if (!id) {
      throw new Error('id is required');
    }

    return this.request.post({ method: 'collection', body: { id, make }, requestType: 'query' });
  }

  public async createOredit(torrentUploadForm: IBunTorrentUploadFormInput) {
    return this.request.post({ method: 'createOredit', body: torrentUploadForm });
  }

  public async detail(id: number, origin: string = 'web') {
    if (!id) {
      throw new Error('id is required');
    }
    return this.request.post({ method: 'detail', body: { id, origin }, requestType: 'query' });
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
   * @param { IBunTorrentSearch } options
   * @param { string } options.mode - The mode of the search
   * @param { number } [options.pageSize=100] - The page size of the search
   * @param { number } [options.pageNumber=1] - The page number of the search
   * @param { string } [options.sortDirection='desc'] - The sort direction of the search
   */
  public async search(options: IBunTorrentSearchInput) {
    if (!options) {
      throw new Error('options is required');
    }
    if (!options.mode) {
      throw new Error('options.mode is required');
    }
    options.pageSize = options.pageSize || 100;
    options.pageNumber = options.pageNumber || 1;
    options.sortDirection = options.sortDirection || 'desc';
    options.visible = options.visible || 1;
    return this.request.post<IBunSearchOutput>({ method: 'search', body: options });
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
