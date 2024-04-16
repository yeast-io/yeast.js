interface BreadAPI {
  name: string;
  path: string;
  contentType?: string;
}


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

export type Methods = SeedMethods | MemberMethods;

const CONCRETED_DEFINITIONS: BreadAPI[] = Array.of<BreadAPI>(
  ...SEED_DEFINITIONS,
  ...MEMBER_DEFINITIONS
);

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
