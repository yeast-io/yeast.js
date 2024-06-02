import Base from './base.js';
import { GetFriendsOutput, GetBlocksOutput } from './interfaces/friend/output.type.js';
import { MissingArgumentError } from './errors.js';
import { Response, QueryOptions } from './request.js';


class Friend extends Base {

  /**
   * @description To send a request for asking someone to be a friend
   * @param { string | number } friendId
   */
  public async addFriend(friendId: string | number) {
    if (this.utils.isEmpty(friendId)) throw new MissingArgumentError('friendId');
    const options: QueryOptions = {
      method: 'addFriend', body: { friendId }, type: 'form', unwrap: false
    };
    return this.request.post<Response<null>>(options).then(this.isSuccessful.bind(this));
  }


  /**
   * @description To block someone
   * @param { string | number } blockId
   */
  public async addBlock(blockId: string | number) {
    if (this.utils.isEmpty(blockId)) throw new MissingArgumentError('blockId');
    const options: QueryOptions = { method: 'addBlock', body: { blockId }, type: 'form', unwrap: false };
    return this.request.post<Response<null>>(options).then(this.isSuccessful.bind(this));
  }

  /**
   * @description To get the blocklist
   */
  public async getBlocks() {
    return this.request.post<GetBlocksOutput[]>({ method: 'getBlocks' });
  }

  /**
   * @description To get the list of friends
   */
  public async getFriends() {
    return this.request.post<GetFriendsOutput[]>({ method: 'getFriends' });
  }


  /**
   * @description To remove someone from blocklist
   * @param { string | number } blockId
   */
  public async removeBlock(blockId: string | number) {
    if (this.utils.isEmpty(blockId)) throw new MissingArgumentError('blockId');
    const options: QueryOptions = { method: 'removeBlock', body: { blockId }, type: 'form', unwrap: false }
    return this.request.post<Response<null>>(options).then(this.isSuccessful.bind(this));
  }

  /**
   * @description To remove a friend
   * @param { string | number } friendId
   */
  public async removeFriend(friendId: string | number) {
    if (this.utils.isEmpty(friendId)) throw new MissingArgumentError('friendId');
    const options: QueryOptions = { method: 'removeFriend', body: { friendId }, type: 'form',unwrap: false };
    return this.request.post<Response<null>>(options).then(this.isSuccessful.bind(this));
  }

}


export default Friend;
