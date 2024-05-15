import Base from './base.js';
import { 
  ForumListOutput, LastPostOutput, OverForumListOutput
} from './interfaces/forum/output.type.js';
import { SearchTopicsInput } from './interfaces/forum/input.type.js';
import { RequestOptions } from './request.js';
import { MissingArgumentError } from './errors.js';


class Topic extends Base {

  constructor(protected options: RequestOptions) {
    super(options);
  }

  public TopicDel() {
    console.log('TopicDel');
  }

  public topicDetail() {
    console.log('topicDetail');
  }

  public topicEdit() {
    console.log('topicEdit');
  }

  public topicMod() {
    console.log('topicMod');
  }

  public topicNew() {
    console.log('topicNew');
  }

  public topicRedirectV2() {
    console.log('topicRedirectV2');
  }

  /**
   * @description Search topics from a forum by forumId
   * @param { SearchTopicsInput } options
   */
  public async search(options: SearchTopicsInput) {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    if (!this.utils.has(options, 'forumId')) throw new MissingArgumentError('options.forumId');
    return this.request.post<{ topicList: any[] }>({
      method: 'topicSearch',
      body: {
        fid: options.forumId,
        pageNumber: options.pageNumber || 1,
        pageSize: options.pageSize || 100
      },
      type: 'body'
    });
  }

  public topicViewHits() {
    console.log('topicViewHits');
  }
}


class Forum extends Base {

  public readonly topic: Topic;
  public readonly topicSearch: (options: SearchTopicsInput) => Promise<{ topicList: any[] }>;

  constructor(protected options: RequestOptions ) {
    super(options);
    this.topic = new Topic(options);
    this.topicSearch = this.topic.search.bind(this.topic);
  }

  /**
   * @description List forums which includes forumList, lastPost and overForumList
   */
  public async forums() {
    return this.request.post<{
      forumsList: ForumListOutput[];
      lastPost: LastPostOutput;
      overForumList: OverForumListOutput[];
    }>({ method: 'forums' });
  }

  public forumDel() {
      console.log('forumDel');
  }

  public forumDetail() {
      console.log('forumDetail');
  }

  public forumEdit() {
      console.log('forumEdit');
  }

  public forumNew() {
      console.log('forumNew');
  }


}


export default Forum;
