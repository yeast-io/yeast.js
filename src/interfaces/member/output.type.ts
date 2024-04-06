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
