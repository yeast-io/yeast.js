import Base from './base.js';

import { MissingArgumentError } from './errors.js';
import { Response } from './request.js';


class Friend extends Base {


  /**
   * @description To send a request for asking someone to be a friend
   * @param { string | number } uid
   */
  public async addFriend(uid: string | number) {
    if (this.utils.isEmpty(uid)) throw new MissingArgumentError('uid');
    return this.request.post<Response<null>>({ method: 'addFriend', body: { uid }, unwrap: false })
      .then(this.isSuccessful.bind(this));
  }


  /**
   * @description To block someone
   * @param { string | number } uid
   */
  public async addBlock(uid: string | number) {
    if (this.utils.isEmpty(uid)) throw new MissingArgumentError('uid');
    return this.request.post<Response<null>>({ method: 'addBlock', body: { uid }, unwrap: false })
      .then(this.isSuccessful.bind(this));
  }

  public async getBlocks() {}
  public async getFriends() {}
  public async removeBlock() {}
  public async removeFriend() {}

}


export default Friend;
