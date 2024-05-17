

export interface ReallySimpleSyndicationInput {
  pageNumber?: number;
  pageSize?: number;
  lastId?: number;
  keyword?: string;
  tkeys?: string[];
  categories?: string[];
  sources?: string[];
  mediums?: string[];
  standards?: string[];
  videoCodecs?: string[];
  audioCodecs?: string[];
  teams?: string[];
  processings?: string[];
  labels?: number;
  onlyFav?: 'true' | 'false';
}
