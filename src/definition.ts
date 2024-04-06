
interface BreadAPI {
  name: string;
  path: string;
  contentType?: string;
}


const SEED_DEFINITIONS: BreadAPI[] = [
  /**
   * Seed related methods
   */
  { name: 'audioCodecList', path: '/api/torrent/audioCodecList' },
  { name: 'categoryList', path: '/api/torrent/categoryList' },
  { name: 'collection', path: '/api/torrent/collection' },
  { name: 'createOredit', path: '/api/torrent/createOredit', contentType: 'application/json' },
  { name: 'detail', path: '/api/torrent/detail' },
  { name: 'doubanInfo', path: '/api/torrent/doubanInfo' },
  { name: 'files', path: '/api/torrent/files' },
  { name: 'genDlToken', path: '/api/torrent/genDlToken' },
  { name: 'imdbInfo', path: '/api/torrent/imdbInfo' },
  { name: 'mediumList', path: '/api/torrent/mediumList' },
  { name: 'peers', path: '/api/torrent/peers' },
  { name: 'processingList', path: '/api/torrent/processingList' },
  { name: 'queryTorrentTrackerHistory', path: '/api/torrent/queryTorrentTrackerHistory' },
  { name: 'requestReseed', path: '/api/torrent/requestReseed' },
  { name: 'rewardStatus', path: '/api/torrent/rewardStatus' },
  { name: 'sayThank', path: '/api/torrent/sayThank' },
  { name: 'search', path: '/api/torrent/search', contentType: 'application/json' },
  { name: 'sendReward', path: '/api/torrent/sendReward' },
  { name: 'sourceList', path: '/api/torrent/sourceList' },
  { name: 'standardList', path: '/api/torrent/standardList' },
  { name: 'teamList', path: '/api/torrent/teamList' },
  { name: 'thanksStatus', path: '/api/torrent/thanksStatus' },
  { name: 'videoCodecList', path: '/api/torrent/videoCodecList' },
  { name: 'viewHits', path: '/api/torrent/viewHits' },
];

export type SeedMethods =
  'audioCodecList' | 'search'  | 'categoryList' | 'collection' |
  'createOredit' | 'detail'| 'doubanInfo' | 'files' |
  'genDlToken' | 'imdbInfo' | 'mediumList' | 'peers' |
  'processingList' | 'queryTorrentTrackerHistory' | 'requestReseed' | 'rewardStatus' |
  'sayThank' | 'sendReward' | 'sourceList' | 'standardList' |
  'teamList' | 'thanksStatus' | 'videoCodecList' | 'viewHits';

export type Methods = SeedMethods;

const CONCRETED_DEFINITIONS: BreadAPI[] = Array.of<BreadAPI>(...SEED_DEFINITIONS);

class Builder {

  protected collection: Map<string, BreadAPI> = new Map();

  constructor() {
    for (const api of CONCRETED_DEFINITIONS) {
      this.collection.set(api.name, api);
    }
  }

  public find(name: Methods): BreadAPI {
    if (!this.collection.has(name)) {
      throw new Error(`Method ${name} not found`);
    }
    return this.collection.get(name) as BreadAPI;
  }
}


export default Builder;
