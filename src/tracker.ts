import Base from './base.js';
import { UnimplementedMethodError, MissingArgumentError } from './errors.js';
import {
  ClientListOutput, BonusOutput, PeerStateOutput
} from './interfaces/tracker/output.type.js';
import { Response } from './request.js';


class Tracker extends Base {


  /**
   * @description This method has not been implemented yet
   * @deprecated
   * @throws { UnimplementedMethodError }
   */
  public async announce() {
    throw new UnimplementedMethodError('announce');
  }

  /**
   * @description This method has not been implemented yet
   * @deprecated
   * @throws { UnimplementedMethodError }
   */
  public async scrape() {
    throw new UnimplementedMethodError('scrape');
  }

  /**
   * @description Get the list of member P2P Bittorrent clients
   * @param { string | number } uid
   */
  public async clientList(uid: string | number) {
    if (this.utils.isEmpty(uid)) throw new MissingArgumentError('uid');
    return this.request.post<ClientListOutput[]>({ method: 'clientList', body: { uid }, type: 'form' });
  }

  /**
   * @description This method has not been implemented yet
   * @deprecated
   * @throws { UnimplementedMethodError }
   */
  public async clientTest() {
    throw new UnimplementedMethodError('clientTest');
  }

  /**
   * @description To flush your ghost torrents.
   *  - This method has a frequency limit and asks for more information from the official TG group if you've any questions.
   * @param { string | number } uid
   */
  public async flush(uid: string | number) {
    if (this.utils.isEmpty(uid)) throw new MissingArgumentError('uid');
    return this.request.post<Response<null>>({
      method: 'flush', body: { uid }, type: 'form', unwrap: false
    }).then(this.isSuccessful.bind(this));
  }

  /**
   * @description Get the bonus information of the member
   * @param { string | number } uid
   */
  public async mybonus(uid: string | number) {
    return this.request.post<BonusOutput>({ method: 'mybonus', body: { uid }, type: 'form' });
  }

  /**
   * @description Get the peer status of the member
   */
  public async myPeerStatus() {
    return this.request.post<PeerStateOutput>({ method: 'myPeerStatus' });
  }

  /**
   * @description This method has not been implemented yet
   * @deprecated
   * @throws { UnimplementedMethodError }
   */
  public async queryHistory() {
    throw new UnimplementedMethodError('queryHistory');
  }
}

export default Tracker;
