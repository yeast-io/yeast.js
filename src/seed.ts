import Base from './base.js';
import {
  AudioCodecListOutput, CategoryListOutput, DoubanInfoOutput,
  SearchOutput, FileOutput, DownloadableTorrentUrlOutput,
  IMDBInfoOutput, TorrentPeersOutput, MediumListOutput,
  ProcessingListOutput, TorrentRewardStatusOutput, SourceListOutput,
  StandardListOutput, TeamListOutput, TorrentThankStatusOutput,
  VideoCodecListOutput, TorrentTrackerUserHistoryOutput
} from './interfaces/seed/output.type.js';
import {
  TorrentSearchInput, TorrentUploadFormInput,
  TorrentTrackerUserHistoryInput
} from './interfaces/seed/input.type.js';


const MISSING_PARAMETER = 'missing params';


class Seed extends Base {


  /**
   * @description To get a collection
   *
   * @param { number } id
   * @param { boolean } [make=false] - Whether to make the collection
   */
  public async collection(id: number, make: boolean = false) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post({ method: 'collection', body: { id, make }, type: 'query' });
  }

  public async createOredit(torrentUploadForm: TorrentUploadFormInput) {
    return this.request.post({ method: 'createOredit', body: torrentUploadForm });
  }

  public async detail(id: number, origin: string = 'web') {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post({ method: 'detail', body: { id, origin }, type: 'query' });
  }

  /**
   * It's going to get the douban info
   * @param { string } code - douban id (26608246)
   */
  public async doubanInfo(code: string) {
    if (this.utils.isEmpty(code)) throw new Error(MISSING_PARAMETER);
    return this.request.post<DoubanInfoOutput>({ method: 'doubanInfo', body: { code }, type: 'query' });
  }

  /**
   * To get a file list which is related to the id of the torrent
   * @param { number} id - TorrentId
   */
  public async files(id: number) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post<FileOutput[]>({ method: 'files', body: { id }, type: 'query' });
  }

  /**
   * To get an available url of torrent file by id
   * @param { number } id
   */
  public async genDlToken(id: number) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post<DownloadableTorrentUrlOutput>({
      method: 'genDlToken', body: { id }, type: 'query'
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
    return this.request.post<IMDBInfoOutput>({ method: 'imdbInfo', body: { code }, type: 'query' });
  }

  /**
   * To get the information of peers
   * @param { number } id - TorrentId
   */
  public async peers(id: number) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post<TorrentPeersOutput[]>({ method: 'peers', body: { id }, type: 'query' });
  }


  /**
   * To query the torrent tracker user history
   * @param { TorrentTrackerUserHistoryInput } options
   * @param { number } options.torrent - TorrentId
   * @param { number } [options.pageSize=100] - The page size of the search
   * @param { number } [options.pageNumber=1] - The page number of the search
   * @param { number } [options.lastId] - lastId
   */
  public async queryTorrentTrackerHistory(options: TorrentTrackerUserHistoryInput) {
    if (this.utils.isEmpty(options as object)) {
      throw new Error('options is required');
    }

    if (!this.utils.has(options, 'torrent')) {
      throw new Error('options.torrent is required');
    }

    options.pageSize = options.pageSize || 100;
    options.pageNumber = options.pageNumber || 1;
    return this.request.post<TorrentTrackerUserHistoryOutput>({
      method: 'queryTorrentTrackerHistory', body: options, type: 'query'
    });
  }

  /**
   * To make a request to reseed for the torrent, and it only allows to request once in 15 minutes.
   * @param { number } id - TorrentId
   */
  public async requestReseed(id: number) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post<{ code: string, message: string }>({
      method: 'requestReseed', body: { id }, type: 'query', unwrap: false
    })
      .then(res => res.code === '0' && res.message === 'SUCCESS');
  }

  /**
   * To get the reward status of the torrent
   * @param { number } id - TorrentId
   */
  public async rewardStatus(id: number) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post<TorrentRewardStatusOutput>({
      method: 'rewardStatus', body: { id }, type: 'query'
    });
  }

  /**
   * To say thanks to the uploader
   * @param { number } id
   */
  public async sayThank(id: number) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post<{ code: string, message: string }>({
      method: 'sayThank', body: { id }, type: 'query', unwrap: false
    })
      .then(res => res.code === '0' && res.message === 'SUCCESS');
  }


  /**
   * To search seeds through M-team's API
   * @param { TorrentSearch } options
   * @param { string } options.mode The mode of the search
   * @param { string } [options.keyword=null] The keyword of the search
   * @param { number } [options.pageSize=100] The page size of the search
   * @param { number } [options.pageNumber=1] The page number of the search
   * @param { string } [options.sortDirection='DESC'] The sort direction of the search
   */
  public async search(options: TorrentSearchInput) {
    if (this.utils.isEmpty(options as object)) {
      throw new Error('options is required');
    }

    if (!options.mode) {
      throw new Error('options.mode is required');
    }

    options.pageSize = options.pageSize || 100;
    options.pageNumber = options.pageNumber || 1;
    options.sortDirection = options.sortDirection || 'DESC';
    options.visible = options.visible || 1;
    return this.request.post<SearchOutput>({ method: 'search', body: options });
  }

  public async sendReward(id: number, reward: number) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    reward = parseInt(reward as any, 10);
    if (reward <= 0) throw new Error('reward must be greater than 0');
    return this.request.post({
      method: 'sendReward', body: { id, reward }, type: 'query', unwrap: false
    }).then(res => res.code === '0' && res.message === 'SUCCESS');
  }

  /**
   * You can check the status of thanks
   * @param { number } id - TorrentId
   */
  public async thanksStatus(id: number) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post<TorrentThankStatusOutput>({
      method: 'thanksStatus', body: { id }, type: 'query'
    });
  }

  /**
   * To view the hits of the torrent
   * @param { number } id
   */
  public async viewHits(id: number) {
    if (this.utils.isEmpty(id)) throw new Error(MISSING_PARAMETER);
    return this.request.post<string>({
      method: 'viewHits', body: { id }, type: 'query'
    });
  }


  /*
   * ===========================  List Interfaces =============================
   * @description These interfaces are used to get the list which you can use the outcome as a filter for searching torrents.
   */
  public async mediumList() {
    return this.request.post<MediumListOutput[]>({ method: 'mediumList' });
  }

  public async sourceList() {
    return this.request.post<SourceListOutput[]>({ method: 'sourceList' });
  }

  public async standardList() {
    return this.request.post<StandardListOutput[]>({ method: 'standardList' });
  }

  public async teamList() {
    return this.request.post<TeamListOutput[]>({ method: 'teamList' });
  }

  public async videoCodecList() {
    return this.request.post<VideoCodecListOutput[]>({ method: 'videoCodecList' });
  }

  public async processingList() {
    return this.request.post<ProcessingListOutput[]>({ method: 'processingList' });
  }

  public async audioCodecList() {
    return this.request.post<AudioCodecListOutput[]>({ method: 'audioCodecList' });
  }

  public async categoryList() {
    return this.request.post<CategoryListOutput>({ method: 'categoryList' });
  }
  /* =========================================  End  ======================================= */
}

export default Seed;
