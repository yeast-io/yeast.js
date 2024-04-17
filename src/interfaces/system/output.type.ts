import { Pagination } from '../base.type.js';


interface BannedInfo {
  id: string;
  createdDate: string;
  lastModifiedDate: string;
  userid: string;
  username: string;
  reason: string;
}

export interface BannedOutput extends Pagination<BannedInfo> {}
