
export interface CreateSeekTorrentInput {
  seekId?: number;
  title: string;
  category: number;
  source?: number;
  standard?: number;
  imdb?: string;
  douban?: string;
  dmmCode?: string;
  reward: number;
  intro: string;
}
