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


export interface SystemRoleOutput {
  createdDate: string;
  lastModifiedDate: string;
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
interface MemberStatus {
  createdDate: string;
  lastModifiedDate: string;
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

interface MemberCount {
  createdDate: string;
  lastModifiedDate: string;
  id: string;
  bonus: number;
  uploaded: string;
  downloaded: string;
  shareRate: number;
  charity: string;
  uploadReset: string;
}

export interface MemberProfileOutput {
  id: string;
  createdDate: string;
  lastModifiedDate: string;
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
