/**
 * @description Interface for the output of the member
 * @interface BaseOutput
 */
export interface BaseOutput {
  warnedUntil: string;
  country: string;
  role: string;
  donorUntil: string;
  avatarUrl: string;
  title: string;
  respAt: string;
  enabled: boolean;
  uid: string;
  donor: boolean;
  warned: boolean;
  lastBrowse: string;
  username: string;
}

export interface BasesOutput {
  [key: string]: BaseOutput;
}


export interface SystemRoleOutput {
  createdDate: string;
  lastModifiedDate: string;
  id: string;
  nameChs: string;
  nameCht: string;
  nameEng: string;
  image: string;
  color: string;
  roleType: string;
  admin: boolean;
  descritpion: string;
  permissions: string[];
  readAccess: number;
  classUp: number;
  registerWeek: number;
  downloaded: string;
  shareRate: number;
  shareRateLimit: number;
  sortPoint: number;
}
