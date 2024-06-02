

export interface SubtitleSearchInput {
  pageSize?: number;
  pageNumber?: number;
  lastId?: number | string;
  keyword?: string;
  langId?: string | number;
}

export interface SubtitleUploadInput {
  torrent: string | number;
  title: string;
  file: string;
  anonymous?: boolean;
  lang?: string | number;
}
