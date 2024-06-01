import { MTeamTimestamp, Pagination } from '../base.type.js';



export interface SubtitleLangOutput extends MTeamTimestamp {
  id: string;
  langName: string;
  flagpic: string;
  subLang: boolean;
  siteLang: boolean;
  langTag: string;
}


interface SubtitleProps extends MTeamTimestamp {
  id: string;
  torrent: string;
  name: string;
  filename: string;
  savePath: string;
  size: string;
  lang: string;
  author: string | null;
  anonymous: boolean;
  hits: string;
  ext: string;
}

export interface SubtitleSearchOutput extends Pagination<SubtitleProps> {}
