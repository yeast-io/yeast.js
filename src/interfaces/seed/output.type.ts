/**
 * @description It is a timestamp object which is related to the createdDate and lastModifiedDate
 * @interface TimestampObject
 * @property { string } createdDate - For example, '2024-04-05 22:19:31'
 * @property { string } lastModifiedDate - For example, '2024-04-05 22:19:31'
 */
interface TimestampObject {
  createdDate: string;
  lastModifiedDate: string;
}


export interface AudioCodecListOutput extends TimestampObject {
  id: string;
  order: string;
  name: string;
}

export interface VideoCodecListOutput extends TimestampObject {
  id: string;
  order: string;
  name: string;
}

export interface StandardListOutput extends TimestampObject {
  id: string;
  order: string;
  name: string;
}

export interface TeamListOutput extends TimestampObject {
  id: string;
  order: string;
  name: string;
  leader: string;
  members: string[];
  freeOffer: boolean;
}

export interface CategoryListOutput {
  [key: string]: unknown;
}

export interface SourceListOutput extends TimestampObject {
  id: string;
  order: string;
  nameChs: string;
  nameCht: string;
  nameEng: string;
}


export interface SearchOutput {
  pageNumber: number;
  pageSize: number;
  total: number;
  totalPages: number;
  data: Record<any, any>[];
}


// ========================     Torrent tracker history =========================
interface TorrentTrackerUserInfo {
  createdDate: string;
  download: string;
  downloadedReal: string;
  id: string;
  lastAction: string;
  lastCompleteDate: string;
  lastModifiedDate: string;
  leechtime: string;
  seedtime: string;
  startDate: string;
  timesCompleted: string;
  torrent: string;
  uploaded: string;
  uploadedReal: string;
  userid: string;
}

export interface TorrentTrackerUserHistoryOutput {
  pageNumber: number;
  pageSize: number;
  total: number;
  totalPages: number;
  data: TorrentTrackerUserInfo[];
}

/**
 * @description It's all about douban info
 * @interface DoubanInfoOutput
 */
export interface DoubanInfoOutput {
  rating: {
    count: string;
    max: string;
    star_count: string;
    value: number;
  }
  lineticket_url: string;
  controversy_reason: string;
  pubdate: string[];
  last_episode_number: unknown;
  pic: {
    large: string;
    normal: string;
  }
  vendor_count: string;
  body_bg_color: string;
  is_tv: boolean;
  card_subtitle: string;
  intro: string;
  ticket_price_info: string;
  webisode_count: string;
  year: string;
  head_info: unknown;
  forum_info: unknown;
  webisode: unknown;
  id: string;
  gallery_topic_count: string;
  languages: string[];
  genres: string[];
  review_count: string;
  title: string;
  has_linewatch: boolean;
  ugc_tabs: { source: string; type: string; title: string }[];
  forum_topic_count: string;
  ticket_promo_text: string;
  webview_info: unknown[];
  is_released: boolean;
  vendors: unknown[];
  actors: { name: string }[];
  interest: unknown;
  episodes_count: string;
  color_scheme: {
    is_dark: boolean;
    primary_color_light: string;
    _base_color: number[];
    secondary_color: string;
    _avg_color: number[];
    primary_color_dark: string;
  }
  type: string;
  null_rating_reason: string;
  linewatches: unknown[];
  info_url: string;
  tags: unknown[];
  durations: string[];
  comment_count: string;
  cover: Record<string, any>;
  cover_url: string;
  restrictive_icon_url : string;
  header_bg_color : string;
  is_douban_intro : boolean;
  ticket_vendor_icons : string[]
  honor_infos : string[],
  sharing_url : string;
  subject_collections : string[],
  wechat_timeline_share : string;
  countries : string[];
  url : string;
  release_date : null,
  original_title : string;
  uri : string;
  pre_playable_date : null,
  episodes_info : string;
  subtype : string;
  directors : { name: string }[];
  is_show : boolean;
  in_blacklist : boolean;
  pre_release_desc : string;
  video : unknown;
  aka : string[];
  is_restrictive: boolean;
  trailer: Record<string, any>;
  vendor_icons: unknown[];
  [key: string]: unknown;
}


export interface FileOutput {
  createdDate: string;
  lastModifiedDate: string;
  id: string;
  torrent: string,
  name: string;
  size: string;
}

export type DownloadableTorrentUrlOutput = string;


/* ========================     IMDB         ========================== */
export interface IMDBParticipantInfo {
  imdb: string;
  name: string;
  role: string;
}

export interface IMDBExtraParticipantInfo extends IMDBParticipantInfo {
  credited: boolean;
  role_other: string[];
  thumb: string;
  photo: string;
}

export interface IMDBInfoOutput {
  title: string;
  country: string[];
  director: IMDBParticipantInfo[];
  creator: IMDBParticipantInfo[];
  writing: IMDBParticipantInfo[];
  producer: IMDBParticipantInfo[];
  cast: IMDBExtraParticipantInfo[];
  plot: unknown[];
  plotoutline: string;
  composer: {imdb: string, name: string, role: string}[];
  genres: string[];
  comment: string;
  photo: { full: string, thumb: string };
  alsoknow: unknown[],
  tagline: string;
  runtime: string;
  year: string;
  votes: string;
  rating: number;
  language: string;
  languages: string[];
  awards: unknown[];
  [key: string]: unknown;
}


export interface TorrentPeersOutput extends TimestampObject {
  id: string;
  memberId: string;
  torrentId: string;
  ip: string;
  box: boolean;
  ipv6: string;
  v6Box: boolean;
  location: string;
  agent: string;
  peerId: string;
  left: string;
  uploaded: string;
  downloaded: string;
  lastAction: string;
}

export interface MediumListOutput extends TimestampObject {
  id: string;
  order: string;
  nameChs: string;
  nameCht: string;
  nameEng: string;
}


export interface ProcessingListOutput extends TimestampObject {
  id: string;
  order: string;
  name: string;
}

interface rewardContributors extends TimestampObject {
  id: string;
  torrent: string;
  userid: string;
  value: string
}

export interface TorrentRewardStatusOutput {
  givingSeries: string[];
  rewardCount: string;
  rewardSum: string;
  rewarded: boolean;
  rewardList: rewardContributors[];
}


interface Contributors extends TimestampObject {
  id: string;
  torrent: string;
  userid: string;
}

export interface TorrentThankStatusOutput {
  thanksCount: string;
  thanksList: Contributors[],
  thanked: boolean;
}
