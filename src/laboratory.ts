import Base from './base.js';
import { MissingArgumentError } from './errors.js';
import { Response } from './request.js';


/**
 * @property { boolean } adultGroup - Indicates whether the torrent list is grouped by DMM.
 * @property { boolean } adultMode - Indicates whether the adult mode is enabled.
 */
interface States {
  adultGroup: boolean;
  adultMode: boolean;
}


class Laboratory extends Base {

  /**
   * @description Switch the laboratory state
   */
  public tiggerFunc;

  /**
   * @description Get the laboratory state
   */
  public funcState;

  constructor(protected options: { key: string, url?: string }) {
    super(options);
    this.tiggerFunc = this.switch.bind(this);
    this.funcState = this.state.bind(this);
  }

  /**
   * @description Alias for `tiggerFunc`
   * @param options
   * @param [options.adultGroup=true] - Torrent list grouped by DMM
   * @param [options.adultMode=true] - Adult mode
   */
  public async switch(options: States = { adultGroup: true, adultMode: true }) {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    return this.request.post<Response<null>>({ method: 'tiggerFunc', body: options, unwrap: false })
      .then(this.isSuccessful.bind(this));
  }


  /**
   * @description Alias for `funcState`
   */
  public async state() {
    return this.request.post<States>({ method: 'funcState' });
  }
}


export default Laboratory;
