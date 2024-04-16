
export interface UpdateSecurityInput {
  resetpasskey?: boolean;
  oldPwd?: string;
  chpassword?: string;
  privacy?: 'STRONG' | 'NORMAL' | 'LOW';
}


type Genders = 'MALE' | 'FEMALE' | 'OTHER';
type AcceptPMS = 'yes' | 'no' | 'friends';

/**
 * @description Interface for the input of the update profile
 * @interface UpdateProfileInput
 * @property { boolean } [parked]
 * @property { Genders } [gender]
 * @property { number } [country]
 * @property { boolean } [anonymous]
 * @property { AcceptPMS } [acceptpms]
 * @property { boolean } [commentpm]
 * @property { boolean } [deletepms]
 * @property { boolean } [magicgivingpm]
 * @property { boolean } [savepms]
 * @property { string | null } [avatarUrl]
 * @property { string | null } [info]
 * @property { number } [isp]
 * @property { number } [downloadSpeed]
 * @property { number } [uploadSpeed]
 * @property { string | null } [trackerDomain]
 * @property { string | null } [downloadDomain]
 * @property { number[] } [blockCategories]
 */
export interface UpdateProfileInput {
  parked?: boolean;
  gender?: Genders;
  country?: number;
  anonymous?: boolean;
  acceptpms?: AcceptPMS;
  commentpm?: boolean;
  deletepms?: boolean;
  magicgivingpm?: boolean;
  savepms?: boolean;
  avatarUrl?: string | null;
  info?: string | null;
  isp?: number;
  downloadSpeed?: number;
  uploadSpeed?: number;
  trackerDomain?: string | null;
  downloadDomain?: string | null;
  blockCategories?: number[];
}


export type MemberTorrentSearchTypes = 'UPLOADED' | 'SEEDING' | 'LEECHING' | 'COMPLETED' | 'INCOMPLETE' | 'SEEK';

export interface MemberTorrentSearchInput {
  userid: number;
  pageNumber?: number;
  pageSize?: number;
  lastId?: number;
  keyword?: string;
  type?: MemberTorrentSearchTypes;
}
