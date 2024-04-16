import Base from './base.js';
import { MissingArgumentError, UnimplementedMethodError } from './errors.js';
import {
  BaseOutput, BasesOutput, SystemRoleOutput, MemberProfileOutput,
  SearchMemberTorrentOutput
} from './interfaces/member/output.type.js';
import {
  UpdateProfileInput, UpdateSecurityInput, MemberTorrentSearchInput
} from './interfaces/member/input.type.js';
import { Response } from './request.js';



class Member extends Base {

  /**
   * @description To get the base information of a member
   * @param { number | string } uid - user id
   */
  public async base(uid: number | string) {
    if (this.utils.isEmpty(uid)) throw new MissingArgumentError('uid');
    return this.request.post<BaseOutput>({ method: 'base', body: { id: uid }, type: 'query' });
  }

  /**
   * @description To get the base information of members
   * @param { number[] | string[] } uids
   */
  public async bases(uids: number[] | string[]) {
    if (this.utils.isEmpty(uids)) throw new MissingArgumentError('uids');
    return this.request.post<BasesOutput>({ method: 'bases', body: { ids: uids } });
  }

  /**
   * @unimplemented This method has not yet been implemented for some reason.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async bindOTP() {
    throw new UnimplementedMethodError('bindOTP');
  }

  /**
   * @unimplemented This method has not yet been implemented for some reason.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async changeEmail() {
    throw new UnimplementedMethodError('changeEmail');
  }

  /**
   * @unimplemented This method has not yet been implemented for some reason.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async changeEmailSendCode() {
    throw new UnimplementedMethodError('changeEmailSendCode');
  }

  /**
   * @unimplemented This method has not yet been implemented because it is not permitted by official regulations.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async getSessionList() {
    throw new UnimplementedMethodError('getSessionList');
  }

  /**
   * @unimplemented This method has not yet been implemented for some reason.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async checkInviteCode() {
    throw new UnimplementedMethodError('checkInviteCode');
  }

  /**
   * @unimplemented This method has not yet been implemented because it is not permitted by official regulations.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async forgotPwd() {
    throw new UnimplementedMethodError('forgotPwd');
  }

  /**
   * @unimplemented This method has not yet been implemented because it is not permitted by official regulations.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async forgetPwdTow() {
    throw new UnimplementedMethodError('forgetPwdTow');
  }

  /**
   * @description To generate the OTP URL
   */
  public async genOTPUrl() {
    return this.request.post<string>({ method: 'genOTPUrl' });
  }

  /**
   * @description To get the crime records of the member
   * @param { number | string } uid
   * @notice
   *  - We don't have permission to use this method, So the result can't be predicted.
   *  - You can provide a generic type "CustomizedResult" to describe the results if you know that.
   */
  public async getCrimeRecords<CustomizedResult>(uid: number | string) {
    if (this.utils.isEmpty(uid)) throw new MissingArgumentError('uid');
    return this.request.post<CustomizedResult>({ method: 'getCrimeRecords', type: 'query', body: { uid } });
  }

  /**
   * @description To get the user's torrent list
   * @param options
   * @param { number } options.userid - The user id is required
   * @param { number } [options.pageNumber = 1] - The page number
   * @param { number } [options.pageSize = 100] - The page size
   * @param { MemberTorrentSearchTypes } [options.type = 'COMPLETED'] - The type of the torrent
   */
  public async getUserTorrentList(options: MemberTorrentSearchInput) {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    options.pageNumber = options.pageNumber || 1;
    options.pageSize = options.pageSize || 100;
    options.type = options.type || 'COMPLETED';
    return this.request.post<SearchMemberTorrentOutput>({ method: 'getUserTorrentList', body: options });
  }

  /**
   * @description To trigger the action of logging out
   */
  public async logout() {
    return this.request.post<Response<null>>({ method: 'logout', unwrap: false })
      .then(this.isSuccessful.bind(this));
  }

  /**
   * @description To get the member's profile
   * @param { number | string } uid
   */
  public async profile(uid: number | string) {
    if (this.utils.isEmpty(uid)) throw new MissingArgumentError('uid');
    return this.request.post<MemberProfileOutput>({ method: 'profile' , body: { uid }, type: 'form' });
  }

  /**
   * @unimplemented This method has not yet been implemented because it is not permitted by official regulations.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async queryLoginHistory() {
    throw new UnimplementedMethodError('queryLoginHistory');
  }

  /**
   * @unimplemented This method has not yet been implemented for some reason.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async register() {
    throw new UnimplementedMethodError('register');
  }

  /**
   * @unimplemented This method has not yet been implemented because it is not permitted by official regulations.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async revokeSession() {
    throw new UnimplementedMethodError('revokeSession');
  }

  /**
   * @unimplemented This method has not yet been implemented for some reason.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async sendEmailVerifyCode() {
    throw new UnimplementedMethodError('sendEmailVerifyCode');
  }

  /**
   * @unimplemented This method has not yet been implemented for some reason.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async sendLoginEmailVerifyCode() {
    throw new UnimplementedMethodError('sendLoginEmailVerifyCode');
  }

  /**
   * @description Send the passkey to email of the member
   */
  public async sendPasskey() {
    return this.request.post<Response<null>>({ method: 'sendPasskey', unwrap: false })
      .then(this.isSuccessful.bind(this));
  }

  /**
   * @description To get the system roles
   */
  public async sysRoleList() {
    return this.request.post<SystemRoleOutput[]>({ method: 'sysRoleList' });
  }

  /**
   * @unimplemented This method has not yet been implemented for some reason.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async unbindOTP() {
    throw new UnimplementedMethodError('unbindOTP');
  }

  /**
   * @unimplemented This method has not yet been implemented because it is not permitted by official regulations.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async updateLastBrowse() {
    throw new UnimplementedMethodError('updateLastBrowse');
  }

  /**
   * @description To update the profile of the member.
   * @param options
   * @param { UpdateProfileInput } [options.parked = false] - Use this with caution, It will hang up the account.
   * @param { Genders } [options.gender = 'OTHER'] - Only accept 'MALE' | 'FEMALE' | 'OTHER'
   * @param { number } [options.country] - The country code
   * @param { boolean } [options.anonymous] - Whether to be anonymous
   * @param { AcceptPMS } [options.acceptpms] - Only accept 'yes' = 'All (except blocks)' | 'no' = 'Staff only' | 'friends' = 'Friends only'
   * @param { boolean } [options.commentpm] - Whether to receive comment PMs
   * @param { boolean } [options.deletepms] - Whether to Delete PMs on reply
   * @param { boolean } [options.magicgivingpm] - UNKNOWN
   * @param { boolean } [options.savepms] - Whether to save PMs to sentbox
   * @param { string | null } [options.avatarUrl] - The URL of the avatar
   * @param { string | null } [options.info] - The information of the member
   * @param { number } [options.isp] - The ISP code
   * @param { number } [options.downloadSpeed] - The download speed
   * @param { number } [options.uploadSpeed] - The upload speed
   * @param { string | null } [options.trackerDomain] - The tracker domain
   * @param { string | null } [options.downloadDomain] - The download domain
   * @param { number[] } [options.blockCategories] - The block categories
   */
  public async updateProfile(options: UpdateProfileInput) {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    options.parked = options.parked || false;
    options.acceptpms = options.acceptpms || 'yes';
    options.deletepms = options.deletepms || true;
    options.savepms = options.savepms || false;
    options.magicgivingpm = options.magicgivingpm || true;
    options.commentpm = options.commentpm || true;
    options.gender = options.gender || 'OTHER';
    options.country = options.country || 8;
    options.downloadSpeed = options.downloadSpeed || 0;
    options.uploadSpeed = options.uploadSpeed || 0;
    options.isp = options.isp || 20;
    options.avatarUrl = options.avatarUrl || null;
    options.info = options.info || null;
    options.anonymous = options.anonymous || true;
    options.downloadDomain = options.downloadDomain || null;
    options.trackerDomain = options.trackerDomain || null;
    options.blockCategories = options.blockCategories || [];
    return this.request.post<Response<null>>({ method: 'updateProfile', body: options, unwrap: false })
      .then(this.isSuccessful.bind(this));
  }

  /**
   * @description To update the security of the member.
   *
   * 1. You must provide one field of the following options at a time.
   * 2. If you want to reset the password, then you must provide the old password and the new password.
   *
   * @param { UpdateSecurityInput } options
   * @param { boolean } options.resetpasskey - Whether to reset the passkey
   * @param { string } options.oldPwd - The old password
   * @param { string } options.chpassword - The new password
   * @param { 'STRONG' | 'NORMAL' | 'LOW' } options.privacy - The privacy level
   */
  public async updateSecurity(options: UpdateSecurityInput) {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    return this.request.post<Response<null>>({ method: 'updateSecurity', body: options, type: 'form', unwrap: false })
      .then(this.isSuccessful.bind(this));
  }

  /**
   * @description To verify the account
   * @param { string } email
   * @param { string | number } code
   */
  public async verifyAccount(email: string, code: string | number) {
    if (this.utils.isEmpty(email)) throw new MissingArgumentError('email');
    if (this.utils.isEmpty(code)) throw new MissingArgumentError('code');
    return this.request.post({ method: 'verifyAccount', body: { email, code }, type: 'query'});
  }

  /**
   * @description To verify the account by user
   * @param { string | number } uid
   */
  public async verifyAccountByUser(uid: string | number) {
    if (this.utils.isEmpty(uid)) throw new MissingArgumentError('uid');
    return this.request.post({ method: 'verifyAccountByUser', body: { uid }, type: 'query' });
  }
}


export default Member;
