
/**
 * Interface for creating a new SeekTorrent.
 *
 * @interface
 * @property {string} title - The title of the torrent.
 * @property {number} category - The category of the torrent.
 * @property {number} reward - The reward for the torrent.
 * @property {string} intro - The introduction of the torrent.
 * @property {number} [seekId]
 * @property {number} [source]
 * @property {number} [standard]
 * @property {string} [imdb]
 * @property {string} [douban]
 * @property {string} [dmmCode]
 */
export interface CreateSeekTorrentInput {
  title: string;
  category: number;
  reward: number;
  intro: string;
  seekId?: number | string;
  source?: number;
  standard?: number;
  imdb?: string;
  douban?: string;
  dmmCode?: string;
}


/**
 * Interface for updating a SeekTorrent.
 *
 * @interface UpdateSeekTorrentInput
 * @extends { Exclude<CreateSeekTorrentInput, 'seekId'> }
 * @property { number | string } seekId - The id of the torrent.
 */
export interface UpdateSeekTorrentInput extends Exclude<CreateSeekTorrentInput, 'seekId'> {
  seekId: number | string;
}


export interface SearchRequestSeekingInput {
  pageNumber: number;
  pageSize: number;
  lastId?: number;
  keyword?: string;
  cid?: number;
  take?: boolean;
}
