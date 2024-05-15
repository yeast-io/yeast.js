import Base from './base.js';
import { 
  ForumListOutput, LastPostOutput, OverForumListOutput
} from './interfaces/forum/output.type.js';


class Forum extends Base {

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
   * @param forumId 
   */
  public async topicSearch(forumId: string | number) {
    
  }

  public topicViewHits() {
    console.log('topicViewHits');
  }
}


export default Forum;