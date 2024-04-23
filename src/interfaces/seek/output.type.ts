import { MTeamTimestamp, Pagination } from '../base.type.js';

export interface Detail extends MTeamTimestamp {
  id: string;
  title: string;
  category: string;
  source: null;
  standard: null;
  imdb: null;
  douban: null;
  dmmCode: null;
  intro: string;
  rewardOriginal: string;
  rewardCurrent: string;
  take: boolean;
  author: string;
  comments: string;
  submitNum: string;
  takeNum: string;
  editedBy: null;
}

export interface SeekDetailOutput {
  submitList: Record<string, unknown>;
  submitTakeIds: any[];
  addList: any[];
  detail: Detail;
}

export interface SearchRequestData extends MTeamTimestamp {
  id: string;
  title: string;
  category: string;
  source: null;
  standard: null;
  imdb: null;
  douban: null;
  dmmCode: null;
  intro: string;
  rewardOriginal: string;
  rewardCurrent: string;
  take: boolean;
  author: string;
  comments: string;
  submitNum: string;
  takeNum: string;
  editedBy: null;
}

export interface SearchRequestOutput extends Pagination<SearchRequestData[]>{}
