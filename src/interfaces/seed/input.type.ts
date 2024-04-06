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

/* ===============================  Search ================================= */

type Mode = 'normal' | 'adult' | 'movie' | 'music' | 'tvshow' | 'waterfall' | 'rss' | 'rankings';
type Discounts = 'NORMAL' | 'PERCENT_70' | 'PERCENT_50' | 'FREE' | '_2X_FREE' | '_2X,_2X_PERCENT_50';
type SortFields = 'CREATED_DATE' | 'SIZE' | 'SEEDERS' | 'LEECHERS' | 'TIMES_COMPLETED';
type SortDirections = 'ASC' | 'DESC';

/**
 * @description Torrent search filter
 * @interface TorrentSearchFilter
 * @property { Discounts } [discount] - The discount of the search. for example, 'NORMAL'
 * @property { string } [labels] - The labels of the search.
 * @property { SortFields } [sortField] - The sort field of the search. for example, 'CREATED_DATE'
 * @property { SortDirections } [sortDirection] - The sort direction of the search. for example, 'ASC'
 * @property { string[] } [categories] - The Ids of the category.
 * @property { string[] } [audioCodecs] - The Ids of the audio codecs.
 * @property { string[] } [videoCodecs] - The Ids of the video codecs.
 * @property { string[] } [processings] - The Ids of the processings.
 * @property { string[] } [standards] - The Ids of the standards.
 * @property { string[] } [teams] - The Ids of the teams.
 */
export interface TorrentSearchFilter {
  discount?: Discounts;
  labels?: string;
  sortField?: SortFields;
  sortDirection?: SortDirections;
  categories?: string[];
  audioCodecs?: string[];
  videoCodecs?: string[];
  processings?: string[];
  standards?: string[];
  teams?: string[];
}

/**
 * @description Torrent search input
 * @interface TorrentSearchInput
 * @extends { TorrentSearchFilter }
 * @property { Mode } mode
 * @property { string } [keyword] - The keyword of the search. for example, 'The Matrix'
 * @property { number } [pageSize]
 * @property { number } [pageNumber]
 * @property { number } [visible]
 */
export interface TorrentSearchInput extends TorrentSearchFilter {
  mode: Mode;
  keyword?: string;
  pageSize?: number;
  pageNumber?: number;
  visible?: number;
}
