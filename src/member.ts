import Base from './base.js';
import { MissingArgumentError, UnimplementedMethodError } from './errors.js';
import {
  BaseOutput, BasesOutput, SystemRoleOutput, MemberProfileOutput
} from './interfaces/member/output.type.js';
import {
  UpdateProfileInput, UpdateSecurityInput
} from './interfaces/member/input.type.js';
import { Response } from './request.js';

class Member extends Base {

  /**
   * @description To get the base information of a member
   */
  public async base(uid: number | string) {
    if (this.utils.isEmpty(uid)) throw new MissingArgumentError('uid');
    return this.request.post<BaseOutput>({ method: 'base', body: { id: uid }, type: 'query' });
  }

  public async bases(uids: number[] | string[]) {
    if (this.utils.isEmpty(uids)) throw new MissingArgumentError('uids');
    return this.request.post<BasesOutput>({ method: 'bases', body: { ids: uids } });
  }

  /**
   * @unimplemented This method is not implemented yet for some reason.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async bindOTP() {
    throw new UnimplementedMethodError('bindOTP');
  }

  /**
   * @unimplemented This method is not implemented yet for some reason.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async changeEmail() {
    throw new UnimplementedMethodError('changeEmail');
  }

  /**
   * @unimplemented This method is not implemented yet for some reason.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async changeEmailSendCode() {
    throw new UnimplementedMethodError('changeEmailSendCode');
  }

  public async checkInviteCode() {
    return this.request.post({method: 'checkInviteCode'});
  }

  public async genOTPUrl() {
    return this.request.post({ method: 'genOTPUrl' });
  }

  public async getCrimeRecords() {
    return this.request.post({ method: 'getCrimeRecords' });
  }

  public async getUserTorrentList() {
    return this.request.post({method: 'getUserTorrentList'});
  }

  /**
   * @description To get the member's profile
   * @param { number | string } uid
   */
  public async profile(uid: number | string) {
    if (this.utils.isEmpty(uid)) throw new MissingArgumentError('uid');
    return this.request.post<MemberProfileOutput>({ method: 'profile' , body: { uid }, type: 'form' });
  }

  public async register() {
    return this.request.post({method: 'register'});
  }

  public async sendEmailVerifyCode() {
    return this.request.post({method: 'sendEmailVerifyCode'});
  }

  public async sendLoginEmailVerifyCode() {
    return this.request.post({method: 'sendLoginEmailVerifyCode'});
  }

  /**
   * @description To send the passkey to the member's email
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
   * @unimplemented This method is not implemented yet for some reason.
   * @deprecated This method is deprecated for now.
   * @throws { UnimplementedMethodError }
   */
  public async unbindOTP() {
    throw new UnimplementedMethodError('unbindOTP');
  }

  /**
   * @unimplemented This method is not implemented yet for some reason.
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

  public async verifyAccount(email: string, code: string) {
    if (this.utils.isEmpty(email)) throw new MissingArgumentError('email');
    if (this.utils.isEmpty(code)) throw new MissingArgumentError('code');
    return this.request.post({ method: 'verifyAccount', body: { email, code }, type: 'query'});
  }

  public async verifyAccountByUser(uid: number | string) {
    if (this.utils.isEmpty(uid)) throw new MissingArgumentError('uid');
    return this.request.post({ method: 'verifyAccountByUser', body: { uid }, type: 'query' });
  }
}


export default Member;
