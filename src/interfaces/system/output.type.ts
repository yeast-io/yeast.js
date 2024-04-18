import { Pagination, MTeamTimestamp } from '../base.type.js';


interface BannedInfo extends MTeamTimestamp{
  id: string;
  userid: string;
  username: string;
  reason: string;
}

export interface BannedOutput extends Pagination<BannedInfo> {}


export interface CountryListOutput {
  id: string;
  name: string;
  pic: string;
}


export interface LanguageOutput extends MTeamTimestamp {
  id: string;
  langName: string;
  flagpic: string;
  subLang: boolean;
  siteLang: boolean;
  langTag: string | null;
}


export interface NewsOutput {
  id: string;
  subject: string;
  context: string;
  author: string;
}

export type StaffRoleId = string[];

export interface StaffMembers {
  warnedUntil: string | null;
  country: string;
  role: string;
  donorUntil: string | null;
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

export interface StaffOutput {
  staffRoleIds: StaffRoleId;
  members: StaffMembers[];
}

/**
 * @description The StateOutput interface represents the state of the system.
 * Each property in the interface represents a different aspect of the system's state.
 * All properties are of type string.
 *
 * @interface StateOutput
 *
 * @property {string} userMax - The maximum number of users allowed in the system.
 * @property {string} userCount - The current number of users in the system.
 * @property {string} todayUserCount - The number of users who joined the system today.
 * @property {string} weekUserCount - The number of users who joined the system this week.
 * @property {string} paddingUserCount - The number of users who are in the padding state.
 * @property {string} warnUserCount - The number of users who have received a warning.
 * @property {string} banUserCount - The number of users who have been banned.
 * @property {string} torrentCount - The current number of torrents in the system.
 * @property {string} dieTorrentCount - The number of torrents in the system that are no longer active.
 * @property {string} peerCount - The current number of peers in the system.
 * @property {string} seederCount - The current number of seeders in the system.
 * @property {string} leecherCount - The current number of leechers in the system.
 * @property {string} peerUserCount - The current number of users who are also peers.
 * @property {string} currentUserCount - The current number of users who are active.
 * @property {string} torrentSizeSum - The total size of all torrents in the system.
 * @property {string} uploadSum - The total amount of data uploaded in the system.
 * @property {string} downloadSum - The total amount of data downloaded in the system.
 * @property {string} flowSum - The total amount of data transferred in the system.
 */
export interface StateOutput {
  userMax: string;
  userCount: string;
  todayUserCount: string;
  weekUserCount: string;
  paddingUserCount: string;
  warnUserCount: string;
  banUserCount: string;
  torrentCount: string;
  dieTorrentCount: string;
  peerCount: string;
  seederCount: string;
  leecherCount: string;
  peerUserCount: string;
  currentUserCount: string;
  torrentSizeSum: string;
  uploadSum: string;
  downloadSum: string;
  flowSum: string;
}

export interface SystemConfigOutput {
  SITE_NAME: string;
  OPEN_REGISTER: boolean;
  OPEN_SHOUTBOX: boolean;
  EXT_FORUM_URL: string;
  CLOSE_WEB: boolean;
  HOME_SHOW_POLLS: boolean;
  SHOW_HOTMOVIES: boolean;
  OPEN_FUNBOX: boolean;
  EXT_FORUM: boolean;
  OPEN_INVITE_REGISTER: boolean;
}
