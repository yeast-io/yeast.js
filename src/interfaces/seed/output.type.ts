export interface IBunAudioCodecListOutput {
  createdDate: string;
  lastModifiedDate: string;
  id: string;
  order: string;
  name: string;
}

export interface IBunCategoryListOutput {
  [key: string]: unknown;
}


export interface IBunSearchOutput {
  pageNumber: number;
  pageSize: number;
  total: number;
  totalPages: number;
  data: Record<any, any>[];
}
