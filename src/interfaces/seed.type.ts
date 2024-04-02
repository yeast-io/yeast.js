export interface IBunAudioCodecListResponse {
  createdDate: string;
  lastModifiedDate: string;
  id: string;
  order: string;
  name: string;
}

export interface IBunCategoryListResponse {
  [key: string]: unknown;
}


export interface IBunSeedSearchOptions {
  mode?: 'normal' | 'adult' | 'movie' | 'music' | 'tvshow' | 'waterfall' | 'rss' | 'rankings';
  pageSize?: number;
  pageNumber?: number;
  visible?: number;
  sortDirection?: 'asc' | 'desc';
}

export interface IBunSeedSearchResponse {
  pageNumber: number;
  pageSize: number;
  total: number;
  totalPages: number;
  data: Record<any, any>[];
}

