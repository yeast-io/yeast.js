import Base from './base.js';
import {
  IBunAudioCodecListOutput, IBunCategoryListOutput, IBunDoubanInfoOutput,
  IBunSearchOutput, IBunFileOutput, IBunDownloadableTorrentUrlOutput,
  IBunIMDBInfoOutput, IBunTorrentPeersOutput, IBunMediumListOutput,
  IBunProcessingListOutput
} from './interfaces/seed/output.type.js';
import {
  IBunTorrentSearchInput, IBunTorrentUploadFormInput
} from './interfaces/seed/input.type.js';


const MISSING_PARAMETER = 'missing params';

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
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post({ method: 'collection', body: { id, make }, requestType: 'query' });
  }

  public async createOredit(torrentUploadForm: IBunTorrentUploadFormInput) {
    return this.request.post({ method: 'createOredit', body: torrentUploadForm });
  }

  public async detail(id: number, origin: string = 'web') {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post({ method: 'detail', body: { id, origin }, requestType: 'query' });
  }

  /**
   * It's going to get the douban info
   * @param { string } code - douban id (26608246)
   */
  public async doubanInfo(code: string) {
    if (this.utils.isEmpty(code)) throw new Error(MISSING_PARAMETER);
    return this.request.post<IBunDoubanInfoOutput>({ method: 'doubanInfo', body: { code }, requestType: 'query' });
  }

  /**
   * To get a file list which is related to the id of the torrent
   * @param { number} id - The id of the torrent
   */
  public async files(id: number) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post<IBunFileOutput[]>({ method: 'files', body: { id }, requestType: 'query' });
  }

  /**
   * To get an available url of torrent file by id
   * @param { number } id
   */
  public async genDlToken(id: number) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post<IBunDownloadableTorrentUrlOutput>({
      method: 'genDlToken', body: { id }, requestType: 'query'
    });
  }

  /**
   * It's going to get the imdb info
   * @param { string } code - imdb id (tt0068646)
   */
  public async imdbInfo(
    /**
     * As far as I know, the official API of m-team supports using an array of codes,
     * but the current implementation only supports a single code.
     * because I've tried to send an array of codes and it responds improperly.
     */
    code: string
  ) {
    if (this.utils.isEmpty(code)) throw new Error(MISSING_PARAMETER);
    return this.request.post<IBunIMDBInfoOutput>({ method: 'imdbInfo', body: { code }, requestType: 'query' });
  }

  public async mediumList() {
    return this.request.post<IBunMediumListOutput[]>({ method: 'mediumList' });
  }

  /**
   * To get the information of peers
   * @param { number } id - The id of the torrent
   */
  public async peers(id: number) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post<IBunTorrentPeersOutput[]>({ method: 'peers', body: { id }, requestType: 'query' });
  }

  public async processingList() {
    return this.request.post<IBunProcessingListOutput[]>({ method: 'processingList' });
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
