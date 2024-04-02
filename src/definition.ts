
interface IBunAPI {
  name: string;
  path: string;
  contentType: string;
}

const DEFAULT_CONTENT_TYPE = 'application/x-www-form-urlencoded';

const SEED_DEFINITIONS: IBunAPI[] = [
  /**
   * Seed related methods
   */
  { name: 'audioCodecList', path: '/api/torrent/audioCodecList', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'categoryList', path: '/api/torrent/categoryList', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'collection', path: '/api/torrent/collection', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'createOredit', path: '/api/torrent/createOredit', contentType: 'application/json' },
  { name: 'detail', path: '/api/torrent/detail', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'doubanInfo', path: '/api/torrent/doubanInfo', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'files', path: '/api/torrent/files', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'genDlToken', path: '/api/torrent/genDlToken', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'imdbInfo', path: '/api/torrent/imdbInfo', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'mediumList', path: '/api/torrent/mediumList', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'peers', path: '/api/torrent/peers', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'processingList', path: '/api/torrent/processingList', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'queryTorrentTrackerHistory', path: '/api/torrent/queryTorrentTrackerHistory', contentType: 'application/json' },
  { name: 'requestReseed', path: '/api/torrent/requestReseed', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'rewardStatus', path: '/api/torrent/rewardStatus', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'sayThank', path: '/api/torrent/sayThank', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'search', path: '/api/torrent/search', contentType: 'application/json' },
  { name: 'sendReward', path: '/api/torrent/sendReward', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'sourceList', path: '/api/torrent/sourceList', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'standardList', path: '/api/torrent/standardList', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'teamList', path: '/api/torrent/teamList', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'thanksStatus', path: '/api/torrent/thanksStatus', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'videoCodecList', path: '/api/torrent/videoCodecList', contentType: DEFAULT_CONTENT_TYPE },
  { name: 'viewHits', path: '/api/torrent/viewHits', contentType: DEFAULT_CONTENT_TYPE },
];

export type BunSeedMethods =
  'audioCodecList' | 'search'  | 'categoryList' | 'collection' |
  'createOredit' | 'detail'| 'doubanInfo' | 'files' |
  'genDlToken' | 'imdbInfo' | 'mediumList' | 'peers' |
  'processingList' | 'queryTorrentTrackerHistory' | 'requestReseed' | 'rewardStatus' |
  'sayThank' | 'sendReward' | 'sourceList' | 'standardList' |
  'teamList' | 'thanksStatus' | 'videoCodecList' | 'viewHits';

export type Methods = BunSeedMethods;

const CONCRETED_DEFINITIONS: IBunAPI[] = Array.of<IBunAPI>(...SEED_DEFINITIONS);

class Builder {

  protected collection: Map<string, IBunAPI> = new Map();

  constructor() {
    for (const api of CONCRETED_DEFINITIONS) {
      this.collection.set(api.name, api);
    }
  }

  public find(name: Methods): IBunAPI {
    if (!this.collection.has(name)) {
      throw new Error(`Method ${name} not found`);
    }
    return this.collection.get(name) as IBunAPI;
  }
}


export default Builder;
