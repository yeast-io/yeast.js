/**
 * @description Torrent upload form input
 * @interface TorrentUploadFormInput
 * @property {string} name
 * @property {string} descr
 * @property {number} category
 * @property {boolean} anonymous
 * @property {string} [smallDescr]
 * @property {number} [torrent]
 * @property {number} [offer]
 * @property {number} [source]
 * @property {number} [medium]
 * @property {number} [standard]
 * @property {number} [videoCodec]
 * @property {number} [audioCodec]
 * @property {number} [team]
 * @property {number} [processing]
 * @property {string} [imdb]
 * @property {string} [douban]
 * @property {string} [dmmCode]
 * @property {string} [cids]
 * @property {string} [aids]
 * @property {number} [labels]
 * @property {string} [tags]
 * @property {string} [file]
 * @property {string} [nfo]
 * @property {string} [mediainfo]
 */
export interface TorrentUploadFormInput {
  name: string;
  descr: string;
  category: number;
  anonymous: boolean;
  smallDescr?: string;
  torrent?: number;
  offer?: number;
  source?: number;
  medium?: number;
  standard?: number;
  videoCodec?: number;
  audioCodec?: number;
  team?: number;
  processing?: number;
  imdb?: string;
  douban?: string;
  dmmCode?: string;
  cids?: string;
  aids?: string;
  labels?: number;
  tags?: string;
  file?: string;
  nfo?: string;
  mediainfo?: string;
}


/**
 * @description Torrent search input
 * @interface TorrentSearchInput
 * @property { 'normal' | 'adult' | 'movie' | 'music' | 'tvshow' | 'waterfall' | 'rss' | 'rankings' } mode
 * @property {number} [pageSize]
 * @property {number} [pageNumber]
 * @property {number} [visible]
 * @property { 'asc' | 'desc' } [sortDirection]
 */
export interface TorrentSearchInput {
  mode: 'normal' | 'adult' | 'movie' | 'music' | 'tvshow' | 'waterfall' | 'rss' | 'rankings';
  pageSize?: number;
  pageNumber?: number;
  visible?: number;
  sortDirection?: 'asc' | 'desc';
}
