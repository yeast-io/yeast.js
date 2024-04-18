import { Pagination, MTeamTimestamp } from '../base.type.js';

/**
 * @description Interface for the output of the member
 * @interface BaseOutput
 */
export interface BaseOutput {
  warnedUntil: string;
  country: string;
  role: string;
  donorUntil: string;
  avatarUrl: string;
  title: string;
  respAt: string;
  enabled: boolean;
  uid: string;
  donor: boolean;
  warned: boolean;
  lastBrowse: string;
  username: string;
}

export interface BasesOutput {
  [key: string]: BaseOutput;
}


export interface SystemRoleOutput extends MTeamTimestamp {
  id: string;
  nameChs: string;
  nameCht: string;
  nameEng: string;
  image: string;
  color: string;
  roleType: string;
  admin: boolean;
  descritpion: string;
  permissions: string[];
  readAccess: number;
  classUp: number;
  registerWeek: number;
  downloaded: string;
  shareRate: number;
  shareRateLimit: number;
  sortPoint: number;
}


// =================================== Member Profile ===================================
interface MemberStatus extends MTeamTimestamp {
  id: string;
  vip: boolean;
  vipUntil: null;
  vipAdded: null;
  vipDuties: string;
  donor: boolean;
  donorUntil: string;
  noad: boolean;
  noadUntil: null;
  warned: boolean;
  warnedUntil: null;
  leechWarn: boolean;
  leechWarnUntil: null;
  lastLogin: string;
  lastBrowse: string;
  lastTracker: null;
  lastChangePwd: null;
}

interface MemberCount extends MTeamTimestamp{
  id: string;
  bonus: number;
  uploaded: string;
  downloaded: string;
  shareRate: number;
  charity: string;
  uploadReset: string;
}

export interface MemberProfileOutput extends MTeamTimestamp {
  id: string;
  username: string;
  email: string;
  status: string;
  enabled: boolean;
  ip: string;
  country: string;
  gender: string;
  privacy: string;
  language: null;
  allowDownload: boolean;
  memberStatus: MemberStatus;
  memberCount: MemberCount;
  parked: boolean;
  parentId: string;
  invites: string;
  role: string;
  staffPosition: null;
  staffDuties: null;
  roles: null;
  limitInvites: string;
  info: string;
  acceptpms: string;
  deletepms: boolean;
  savepms: boolean;
  commentpm: boolean;
  magicgivingpm: boolean;
  downloadSpeed: string;
  uploadSpeed: string;
  isp: string;
  avatarUrl: string;
  title: string;
  anonymous: boolean;
  enabledTfa: boolean;
  seedtime: string;
  leechtime: string;
  torrentCommentCount: string;
  seekCommentCount: string;
  forumCommentCount: string;
  ipCount: string;
  friend: boolean;
  block: boolean;
  trackerDomain: null;
  downloadDomain: null;
  blockCategories: string[];
  authorities: string[];
}


// **************************************** Search member torrents ****************************************
interface SearchMemberTorrent extends MTeamTimestamp {
  id: string;
  name: string;
  smallDescr: string;
  imdb: string;
  imdbRating: string;
  douban: string;
  doubanRating: number | null;
  dmmCode: string;
  author: string | null;
  category: string;
  source: string;
  medium: string;
  standard: string;
  videoCodec: string;
  audioCodec: string;
  team: string;
  processing: string;
  numfiles: string;
  size: string;
  tags: string;
  labels: string;
  msUp: number;
  anonymous: boolean;
  infoHash: string | null;
  status: SearchMemberTorrentStatus;
  editedBy: string | null;
  editDate: string | null;
  collection: boolean;
  inRss: boolean;
  canVote: boolean;
  client: string | null;
  imageList: string[];
  resetBox: unknown;
}

interface SearchMemberTorrentStatus extends MTeamTimestamp {
  id: string;
  pickType: string;
  toppingLevel: number;
  toppingEndTime: string | null;
  discount: string;
  discountEndTime: string | null;
  promotion: string | null;
  timesCompleted: string;
  comments: string;
  lastAction: string;
  views: string;
  hits: string;
  support: number;
  oppose: number;
  status: string;
  seeders: string;
  leechers: string;
  banned: boolean;
  visible: boolean;
}

interface SearchMemberSnatched extends MTeamTimestamp {
  id: string;
  userid: string;
  torrent: string;
  ip: string;
  port: string;
  toGo: string;
  uploaded: string;
  download: string;
  uploadedReal: string;
  downloadedReal: string;
  seedtime: string;
  leechtime: string;
  timesCompleted: string;
  lastCompleteDate: string | null;
  lastAction: string;
}

export interface SearchMemberTorrentOutput extends Pagination<{
  torrent: SearchMemberTorrent;
  snatched: SearchMemberSnatched;
  peer: unknown;
  seek: unknown;
}> {}
// *********************************************** End ***************************************************

