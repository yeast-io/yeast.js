import Base from './base.js';
import { MissingArgumentError } from './errors.js';
import {
  BaseOutput, BasesOutput
} from './interfaces/member/output.type.js';
import { UpdateSecurityInput } from './interfaces/member/input.type.js';

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



  public async profile() {
    return this.request.post({method: 'profile'});
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

  public async sendPasskey() {
    return this.request.post({ method: 'sendPasskey' });
  }

  public async sysRoleList() {
    return this.request.post({method: 'sysRoleList'});
  }

  public async unbindOTP() {
    return this.request.post({method: 'unbindOTP'});
  }

  public async updateProfile() {
    return this.request.post({method: 'updateProfile'});
  }

  /**
   * @description To update the security of the member.
   *
   * You must provide one field of the following options at a time unless you want to reset the password.
   * @param { UpdateSecurityInput } options
   * @param { boolean } options.resetpasskey
   * @param { string } options.oldPwd
   * @param { string } options.chpassword
   * @param { 'STRONG' | 'NORMAL' | 'LOW' } options.privacy
   */
  public async updateSecurity(options: UpdateSecurityInput) {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    return this.request.post({ method: 'updateSecurity', body: options, type: 'form', unwrap: false })
      .then(res => res.code === '0' && res.message === 'SUCCESS');
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
