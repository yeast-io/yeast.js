
export interface UpdateSecurityInput {
  resetpasskey?: boolean;
  oldPwd?: string;
  chpassword?: string;
  privacy?: 'STRONG' | 'NORMAL' | 'LOW';
}


export interface UpdateProfileInput {
  parked?: boolean;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  country?: number;
  anonymous?: boolean;
  acceptpms?: 'yes' | 'no' | 'friends';
  commentpm?: boolean;
  deletepms?: boolean;
  magicgivingpm?: boolean;
  savepms?: boolean;
  avatarUrl?: string;
  info?: string;
  isp?: number;
  downloadSpeed: number;
  uploadSpeed: number;
  trackerDomain: string;
  downloadDomain: string;
  blockCategories: number[];
}
