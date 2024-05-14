import { DuplicatedMethodError } from './errors.js';

interface BreadAPI {
  name: string;
  path: string;
  contentType?: string;
  originalName?: string;
}

const FRIEND_DEFINITIONS: BreadAPI[] = [
  /**
   * Friend related methods
   */
  { name: 'addFriend', path: '/api/friends/addFriend', contentType: 'application/json' },
  { name: 'addBlock', path: '/api/friends/addBlock', contentType: 'application/json' },
  { name: 'getBlocks', path: '/api/friends/getBlocks', contentType: 'application/json' },
  { name: 'getFriends', path: '/api/friends/getFriends', contentType: 'application/json' },
  { name: 'removeBlock', path: '/api/friends/removeBlock', contentType: 'application/json' },
  { name: 'removeFriend', path: '/api/friends/removeFriend', contentType: 'application/json' }
];

const SEEK_DEFINITIONS: BreadAPI[] = [
  /**
   * Seek related methods
   */
  { name: 'create', path: '/api/seek/create', contentType: 'application/json' },
  { name: 'addto', path: '/api/seek/addto' },
  { name: 'seek_detail', path: '/api/seek/detail' },
  { name: 'edit', path: '/api/seek/edit', contentType: 'application/json' },
  { name: 'recovery', path: '/api/seek/recovery' },
  { name: 'seek_search', path: '/api/seek/search', contentType: 'application/json' },
  { name: 'submit', path: '/api/seek/submit' },
  { name: 'take', path: '/api/seek/take' }
];

const TRACKER_DEFINITIONS: BreadAPI[] = [
  /**
   * Tracker related methods
   */
  { name: 'announce', path: '/api/announce' },
  { name: 'scrape', path: '/api/scrape' },
  { name: 'clientList', path: '/api/tracker/clientList' },
  { name: 'clientTest', path: '/api/tracker/clientTest' },
  { name: 'flush', path: '/api/tracker/flush' },
  { name: 'mybonus', path: '/api/tracker/mybonus' },
  { name: 'myPeerStatus', path: '/api/tracker/myPeerStatus' },
  { name: 'queryHistory', path: '/api/tracker/queryHistory' }
];

const SYSTEM_DEFINITIONS: BreadAPI[] = [
  /**
   * System related methods
   */
  { name: 'banlogs', path: '/api/system/banlogs' },
  { name: 'countryList', path: '/api/system/countryList' },
  { name: 'getConf', path: '/api/system/getConf' },
  { name: 'hello', path: '/api/system/hello' },
  { name: 'ip', path: '/api/system/ip' },
  { name: 'ipASN', path: '/api/system/ipASN' },
  { name: 'langs', path: '/api/system/langs' },
  { name: 'news', path: '/api/system/news' },
  { name: 'staff', path: '/api/system/staff' },
  { name: 'state', path: '/api/system/state' },
  { name: 'sysConf', path: '/api/system/sysConf' },
  { name: 'top', path: '/api/system/top' }
];

const LABORATORY_DEFINITIONS: BreadAPI[] = [
  /**
   * Laboratory related methods
   */
  // Renamed methods
  { name: 'tiggerFunc', path: '/api/laboratory/tiggerFunc', contentType: 'application/json' },
  { name: 'funcState', path: '/api/laboratory/funcState' }
];


const MEMBER_DEFINITIONS: BreadAPI[] = [
  /**
   * Member related methods
   */
  { name: 'base', path: '/api/member/base' },
  { name: 'bases', path: '/api/member/bases', contentType: 'application/json' },
  { name: 'bindOTP', path: '/api/member/bindOTP' },
  { name: 'changeEmail', path: '/api/member/changeEmail' },
  { name: 'changeEmailSendCode', path: '/api/member/changeEmailSendCode' },
  { name: 'checkInviteCode', path: '/api/member/checkInviteCode' },
  { name: 'forgotPwd', path: '/api/member/forgotPwd' },
  { name: 'forgotPwdTow', path: '/api/member/forgotPwdTow' },
  { name: 'genOTPUrl', path: '/api/member/genOTPUrl' },
  { name: 'getCrimeRecords', path: '/api/member/getCrimeRecords' },
  { name: 'getUserTorrentList', path: '/api/member/getUserTorrentList', contentType: 'application/json' },
  { name: 'logout', path: '/api/member/logout' },
  { name: 'profile', path: '/api/member/profile' },
  { name: 'register', path: '/api/member/register' },
  { name: 'sendEmailVerifyCode', path: '/api/member/sendEmailVerifyCode' },
  { name: 'sendLoginEmailVerifyCode', path: '/api/member/sendLoginEmailVerifyCode' },
  { name: 'sendPasskey', path: '/api/member/sendPasskey' },
  { name: 'sysRoleList', path: '/api/member/sysRoleList' },
  { name: 'unbindOTP', path: '/api/member/unbindOTP' },
  { name: 'updateProfile', path: '/api/member/updateProfile', contentType: 'application/json' },
  { name: 'updateSecurity', path: '/api/member/updateSecurity', contentType: 'multipart/form-data' },
  { name: 'verifyAccount', path: '/api/member/verifyAccount' },
  { name: 'verifyAccountByUser', path: '/api/member/verifyAccountByUser' }
];


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

export type MemberMethods =
  'base' | 'bases' | 'bindOTP' | 'changeEmail' | 'changeEmailSendCode' | 'checkInviteCode' |
  'forgotPwd' | 'forgotPwdTow' | 'genOTPUrl' | 'getCrimeRecords' | 'getUserTorrentList' |
  'logout' | 'profile' | 'register' | 'sendEmailVerifyCode' | 'sendLoginEmailVerifyCode' |
  'sendPasskey' | 'sysRoleList' | 'unbindOTP' | 'updateProfile' | 'updateSecurity' |
  'verifyAccount' | 'verifyAccountByUser';

export type LabotoraryMethods = 'tiggerFunc' | 'funcState' | 'switch' | 'state';

export type SystemMethods =
  'banlogs' | 'countryList' | 'getConf' | 'hello' | 'ip' | 'ipASN' |
  'langs' | 'news' | 'staff' | 'state' | 'sysConf' | 'top';

export type TrackerMethods =
  'announce' | 'scrape' | 'clientList' | 'clientTest' | 'flush' | 'mybonus' |
  'myPeerStatus' | 'queryHistory';

export type SeekMethods =
  'create' | 'addto' | 'seek_detail' | 'edit' | 'recovery' | 'seek_search' | 'submit' | 'take';

export type FriendMethods =
  'addFriend' | 'addBlock' | 'getBlocks' | 'getFriends' | 'removeBlock' | 'removeFriend';


export type Methods =
  SeedMethods | MemberMethods | LabotoraryMethods | SystemMethods |
  TrackerMethods | SeekMethods | FriendMethods;

const CONCRETED_DEFINITIONS: BreadAPI[] = Array.of<BreadAPI>(
  ...SEED_DEFINITIONS, ...MEMBER_DEFINITIONS,
  ...LABORATORY_DEFINITIONS, ...SYSTEM_DEFINITIONS,
  ...TRACKER_DEFINITIONS, ...SEEK_DEFINITIONS,
  ...FRIEND_DEFINITIONS
);

class Builder {

  protected collection: Map<string, BreadAPI> = new Map();

  constructor() {
    const methods: string[] = [];
    for (const api of CONCRETED_DEFINITIONS) {
      this.collection.set(api.name, api);
      methods.push(api.name);
    }

    // Check for duplicated methods
    const duplicates = methods.filter((method, index) => methods.indexOf(method) !== index);
    if (duplicates.length > 0) {
      throw new DuplicatedMethodError(duplicates);
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
