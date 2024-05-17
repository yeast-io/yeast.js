import Base from './base.js';
import { 
  ForumListOutput, LastPostOutput, OverForumListOutput,
  SearchTopicsOutput, TopicDetailOutput
} from './interfaces/forum/output.type.js';
import {
  SearchTopicInput, CreateTopicInput, TopicDetailInput,
  TopicEditInput, PostMessageToTopicInput, EditPostedMessageInput
} from './interfaces/forum/input.type.js';
import { RequestOptions, Response } from './request.js';
import { MissingArgumentError, UnimplementedMethodError } from './errors.js';


class Topic extends Base {

  constructor(protected options: RequestOptions) {
    super(options);
  }

  /**
   * @description Create a new topic in a forum
   * @param { CreateTopicInput } options
   * @returns { Promise<string> } tid
   * @alias topicNew
   */
  public async create(options: CreateTopicInput): Promise<string> {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    if (!this.utils.has(options, 'fid')) throw new MissingArgumentError('options.fid');
    if (!this.utils.has(options, 'subject')) throw new MissingArgumentError('options.subject');
    if (!this.utils.has(options, 'body')) throw new MissingArgumentError('options.body');
    return this.request.post<string>({ method: 'topicNew', body: options, type: 'body'});
  }

  /**
   * @description To edit the topic
   * @param { TopicEditInput } options - The options to edit the topic
   * @returns { Promise<boolean> } `true` is successful, otherwise `false`
   * @alias topicEdit
   */
  public async edit(options: TopicEditInput): Promise<boolean> {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    if (!this.utils.has(options, 'fid')) throw new MissingArgumentError('options.fid');
    if (!this.utils.has(options, 'tid')) throw new MissingArgumentError('options.tid');
    if (!this.utils.has(options, 'subject')) throw new MissingArgumentError('options.subject');
    if (!this.utils.has(options, 'body')) throw new MissingArgumentError('options.body');
    return this.request.post<Response<null>>({ method: 'topicEdit', body: options, type: 'body', unwrap: false })
      .then(this.isSuccessful.bind(this));
  }

  /**
   * @description This is an unimplemented method due to the official website didn't provide documentation properly.
   * @throws { UnimplementedMethodError }
   * @alias topicDel
   */
  public async delete() {
    throw new UnimplementedMethodError('topicDel');
  }

  /**
   * @description Get details of a topic by tid
   * @param { TopicDetailInput } options
   * @returns { Promise<TopicDetailOutput> }
   * @alias topicDetail
   */
  public async detail(options: TopicDetailInput): Promise<TopicDetailOutput> {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    if (!this.utils.has(options, 'tid')) throw new MissingArgumentError('options.tid');
    return this.request.post<TopicDetailOutput>({
      method: 'topicDetail',
      body: {
        tid: options.tid,
        pageNumber: options.pageNumber || 1,
        pageSize: options.pageSize || 100
      },
      type: 'body'
    });

  }

  /**
   * @description This is an unimplemented method due to the official website didn't provide documentation properly.
   * @throws { UnimplementedMethodError }
   * @alias topicMod
   */
  public modify() {
    throw new UnimplementedMethodError('topicMod');
  }

  /**
   * @description This is an unimplemented method due to the official website didn't provide documentation properly.
   * @throws { UnimplementedMethodError }
   * @alias topicRedirectV2
   */
  public redirect() {
    throw new UnimplementedMethodError('topicRedirectV2');
  }

  /**
   * @description Search topics from a forum by forumId | fid
   * @param { SearchTopicInput } options - The options to search topics
   * @returns { Promise<SearchTopicsOutput> } - The search results
   */
  public async search(options: SearchTopicInput): Promise<SearchTopicsOutput> {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    if (!this.utils.has(options, 'fid')) throw new MissingArgumentError('options.fid');
    return this.request.post<SearchTopicsOutput>({
      method: 'topicSearch',
      body: {
        fid: options.fid,
        pageNumber: options.pageNumber || 1,
        pageSize: options.pageSize || 100
      },
      type: 'body'
    });
  }

  /**
   * @description To view the topic hits by tid
   * @param { string | number } tid
   * @returns { Promise<number | string> } - The number of hits
   */
  public async viewHits(tid: string | number): Promise<number | string> {
    if (this.utils.isEmpty(tid)) throw new MissingArgumentError('tid');
    return this.request.post<number | string>({ method: 'topicViewHits', body: { tid }, type: 'form' });
  }
}


class Forum extends Base {

  public readonly topic: Topic;
  /**
   * @see Topic.search
   */
  public readonly topicSearch: (options: SearchTopicInput) => Promise<SearchTopicsOutput>;
  /**
   * @see Topic.create
   */
  public readonly topicNew: (options: CreateTopicInput) => Promise<string>;
  /**
   * @see Topic.delete
   */
  public readonly topicDel: () => void;
  /**
   * @see Topic.detail
   */
  public readonly topicDetail: (options: TopicDetailInput) => Promise<TopicDetailOutput>;
  /**
   * @see Topic.viewHits
   */
  public readonly topicViewHits: (tid: string | number) => Promise<number | string>;
  /**
   * @see Topic.edit
   */
  public readonly topicEdit: (options: TopicEditInput) => Promise<boolean>;
  /**
   * @see Topic.modify
   */
  public readonly topicMod: () => void;
  /**
   * @see Topic.redirect
   */
  public readonly topicRedirectV2: () => void;


  /**
   * @see Forum.forumNew
   */
  public readonly post: typeof this.forumNew;
  /**
   * @see Forum.forumEdit
   */
  public readonly edit: typeof this.forumEdit;
  /**
   * @see Forum.forumDel
   */
  public readonly delete: typeof this.forumDel;
  /**
   * @see Forum.forumDetail
   */
  public readonly detail: typeof this.forumDetail;


  constructor(protected options: RequestOptions ) {
    super(options);
    this.topic = new Topic(options);
    this.topicSearch = this.topic.search.bind(this.topic);
    this.topicNew = this.topic.create.bind(this.topic);
    this.topicDel = this.topic.delete.bind(this.topic);
    this.topicDetail = this.topic.detail.bind(this.topic);
    this.topicViewHits = this.topic.viewHits.bind(this.topic);
    this.topicEdit = this.topic.edit.bind(this.topic);
    this.topicMod = this.topic.modify.bind(this.topic);
    this.topicRedirectV2 = this.topic.redirect.bind(this.topic);

    this.post = this.forumNew.bind(this);
    this.edit = this.forumEdit.bind(this);
    this.delete = this.forumDel.bind(this);
    this.detail = this.forumDetail.bind(this);
  }

  /**
   * @description List forums which includes forumList, lastPost and overForumList
   */
  public async forums() {
    return this.request.post<{
      forumsList: ForumListOutput[];
      lastPost: LastPostOutput;
      overForumsList: OverForumListOutput[];
    }>({ method: 'forums' });
  }

  /**
   * @description This is an unimplemented method due to the official website didn't provide documentation properly.
   * @throws { UnimplementedMethodError }
   * @alias Forum.delete
   */
  public async forumDel() {
    throw new UnimplementedMethodError('forumDel');
  }

  /**
   * @description This is an unimplemented method due to the official website didn't provide documentation properly.
   * @throws { UnimplementedMethodError }
   * @alias Forum.detail
   */
  public async forumDetail() {
    throw new UnimplementedMethodError('forumDetail');
  }

  /**
   * @description To edit the posted message in the topic
   * @param { EditPostedMessageInput } options - The options to edit the posted message
   * @returns { Promise<boolean> } `true` is successful, otherwise `false`
   * @alias Forum.edit
   */
  public async forumEdit(options: EditPostedMessageInput): Promise<boolean> {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    if (!this.utils.has(options, 'fid')) throw new MissingArgumentError('options.fid');
    if (!this.utils.has(options, 'tid')) throw new MissingArgumentError('options.tid');
    if (!this.utils.has(options, 'pid')) throw new MissingArgumentError('options.pid');
    if (!this.utils.has(options, 'body')) throw new MissingArgumentError('options.body');
    return this.request.post<Response<null>>({ method: 'forumEdit', body: options, type: 'body', unwrap: false })
      .then(this.isSuccessful.bind(this));
  }

  /**
   * @description Post a new message to the topic
   * @param { PostMessageToTopicInput } options - The options to post a message to the topic
   * @returns { Promise<string> } pid - You can use it to edit or other operations
   * @alias Forum.post
   */
  public async forumNew(options: PostMessageToTopicInput): Promise<string> {
    if (this.utils.isEmpty(options)) throw new MissingArgumentError('options');
    if (!this.utils.has(options, 'fid')) throw new MissingArgumentError('options.fid');
    if (!this.utils.has(options, 'tid')) throw new MissingArgumentError('options.tid');
    if (!this.utils.has(options, 'body')) throw new MissingArgumentError('options.body');
    return this.request.post<string>({ method: 'forumNew', body: options, type: 'body' });
  }
}


export default Forum;
