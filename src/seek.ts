import Base from './base.js';
import { MissingArgumentError } from './errors.js';
import { Response } from './request.js';
import {
  CreateSeekTorrentInput, UpdateSeekTorrentInput, SearchRequestSeekingInput
} from './interfaces/seek/input.type.js';

import {
  SeekDetailOutput, SearchRequestOutput
} from './interfaces/seek/output.type.js';
import { UnimplementedMethodError } from './errors.js';


class Seek extends Base {


  /**
   * @description Add more excess rewards into seeking the torrent
   * @param { string | number } seekId
   * @param { number } reward
   */
  public async addTo(seekId: string | number, reward: number) {
    if (this.utils.isEmpty(seekId)) throw new MissingArgumentError('seekId');
    if (reward <= 0) throw new Error('reward must be greater than 0');
    return this.request.post<Response<null>>({
      method: 'addto', body: { seekId, reward }, type: 'form', unwrap: false
    }).then(this.isSuccessful.bind(this));
  }

  /**
   * @description To request someone else to seed the torrent
   * @param { CreateSeekTorrentInput } options
   */
  public async create(options: CreateSeekTorrentInput) {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    if (this.utils.isEmpty(options.title)) throw new MissingArgumentError('options.title');
    if (this.utils.isEmpty(options.intro)) throw new MissingArgumentError('options.intro');
    if (!this.utils.has(options, 'category')) throw new MissingArgumentError('options.category');
    if (!this.utils.has(options, 'reward')) throw new MissingArgumentError('options.reward');
    if (!this.utils.has(options, 'dmmCode')) options.dmmCode = '';

    if (options.reward <= 999) throw new Error('Minimum reward is 1000');

    return this.request.post<string>({ method: 'create', body: options });
  }

  /**
   * @description To get the detail of the seeking torrent
   * @param { string | number } seekId
   */
  public async detail(seekId: string | number) {
    if (this.utils.isEmpty(seekId)) throw new MissingArgumentError('seekId');
    return this.request.post<SeekDetailOutput>({ method: 'seek_detail', body: { seekId }, type: 'form' });
  }


  /**
   * @description To Update the request of seeking torrent
   * @param { UpdateSeekTorrentInput } options
   */
  public async edit(options: UpdateSeekTorrentInput) {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    if (this.utils.isEmpty(options.seekId)) throw new MissingArgumentError('options.seekId');
    if (this.utils.isEmpty(options.title)) throw new MissingArgumentError('options.title');
    if (this.utils.isEmpty(options.intro)) throw new MissingArgumentError('options.intro');
    if (!this.utils.has(options, 'category')) throw new MissingArgumentError('options.category');
    if (!this.utils.has(options, 'reward')) throw new MissingArgumentError('options.reward');
    if (!this.utils.has(options, 'dmmCode')) options.dmmCode = '';

    return this.request.post<Response<null>>({ method: 'edit', body: options, unwrap: false })
      .then(this.isSuccessful.bind(this));
  }

  /**
   * @description To submit the related torrent to the seeking request
   * @param { string | number } seekId
   * @param { string | number } torrentId
   */
  public async submit(seekId: string | number, torrentId: string | number) {
    if (this.utils.isEmpty(seekId)) throw new MissingArgumentError('seekId');
    if (this.utils.isEmpty(torrentId)) throw new MissingArgumentError('torrentId');
    return this.request.post<Response<null>>({
      method: 'recovery', body: { seekId, torrentId }, type: 'form', unwrap: false
    }).then(this.isSuccessful.bind(this));
  }

  /**
   * @description To search the request of seeking torrent
   */
  public async search(options: SearchRequestSeekingInput = {} as SearchRequestSeekingInput) {
    options.pageNumber = options.pageNumber || 1;
    options.pageSize = options.pageSize || 100;
    return this.request.post<SearchRequestOutput>({ method: 'seek_search' });
  }


  /**
   * @description This method has not been implemented yet due to the reason that the official API does not have complete documentation.
   * @throws { UnimplementedMethodError }
   * @deprecated
   */
  public async recovery() {
    throw new UnimplementedMethodError('recovery');
  }


  /**
   * @description To take the answer of the seeking torrent
   * @param { string | number } seekId
   * @param { string[] | number[] } takeIds
   */
  public async take(seekId: string | number, takeIds: number[] | string[]) {
    if (this.utils.isEmpty(seekId)) throw new MissingArgumentError('seekId');
    if (this.utils.isEmpty(takeIds)) throw new MissingArgumentError('takeIds');
    return this.request.post<Response<null>>({
      method: 'take', body: { seekId, takeIds }, type: 'form', unwrap: false
    }).then(this.isSuccessful.bind(this));
  }

}

export default Seek;
