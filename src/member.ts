import Base from './base.js';
import { MissingArgumentError, UnimplementedMethodError } from './errors.js';
import {
  BaseOutput, BasesOutput
} from './interfaces/member/output.type.js';


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
   * The official API of M-team doesn't document properly about the parameters,
   * So we can't implement this method.
   * @deprecated
   */
  public async bindOTP() {
    throw new UnimplementedMethodError('bindOTP');
  }

  /**
   * The official API of M-team doesn't document properly about the parameters,
   * So we can't implement this method.
   * @deprecated
   */
  public async changeEmail() {
    throw new UnimplementedMethodError('changeEmail');
  }

  /**
   * The official API of M-team doesn't document properly about the parameters,
   * So we can't implement this method.
   * @deprecated
   */
  public async changeEmailSendCode() {
    throw new UnimplementedMethodError('changeEmailSendCode');
  }


  public async checkInviteCode() {
    return this.request.post({method: 'checkInviteCode'});
  }

  public async forgotPwd() {
    return this.request.post({method: 'forgotPwd'});
  }

  public async forgotPwdTow() {
    return this.request.post({method: 'forgotPwdTow'});
  }

  public async genOTPUrl() {
    return this.request.post({method: 'genOTPUrl'});
  }

  public async getCrimeRecords() {
    return this.request.post({method: 'getCrimeRecords'});
  }

  public async getUserTorrentList() {
    return this.request.post({method: 'getUserTorrentList'});
  }

  public async logout() {
    return this.request.post({method: 'logout'});
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
    return this.request.post({method: 'sendPasskey'});
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

  public async updateSecurity() {
    return this.request.post({method: 'updateSecurity'});
  }

  public async verifyAccount() {
    return this.request.post({method: 'verifyAccount'});
  }

  public async verifyAccountByUser() {
    return this.request.post({method: 'verifyAccountByUser'});
  }
}


export default Member;
