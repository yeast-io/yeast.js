import { Pagination, MTeamTimestamp } from '../base.type.js';


interface PricingStrategy {
  createTopicPrice: string;
  replyTopicPrice: string;
  managerFree: boolean;
}

export interface ForumListOutput extends MTeamTimestamp {
  id: number | string;
  order: number | string;
  name: string;
  description: string;
  browseRoles: unknown[];
  postRoles: unknown[];
  createRoles: unknown[];
  topicCount: number | string;
  postCount: number | string;
  forId: number | string;
  pid: number | string | null;
  managers: unknown[];
  pricingStrategy: PricingStrategy;
  canBrowse: boolean;
  canPost: boolean;
  canCreate: boolean;
  inManager: boolean;
}

interface Post extends MTeamTimestamp {
  id: string;
  forumId: string;
  topicId: string;
  authorId: string;
  author: string;
  body: string;
  oriBody: string;
  editBy: string;
  editById: string;
  editDate: string;
}

interface Topics extends MTeamTimestamp {
  id: string;
  forumId: string;
  subject: string;
  sticky: number;
  hlcolor: string;
  locked: boolean;
  firstPost: string;
  lastPost: string;
  views: string;
  commentCount: string;
  author: string;
}

export interface LastPostOutput {
  [ForumId: string]: {
    post: Post;
    topics: Topics;
  }
}

export interface OverForumListOutput extends MTeamTimestamp {
  id: string;
  order: string;
  name: string;
  description: string;
}


interface TopicLastPost extends MTeamTimestamp {
  id: string;
  fid: string | null;
  tid: string | null;
  author: string;
  authorId: string;
  editDate: string | null;
}

interface SearchTopics extends MTeamTimestamp {
  id: string;
  forumId: string;
  subject: string;
  sticky: number;
  hlcolor: string;
  locked: boolean;
  firstPost: string;
  views: string;
  author: string;
  commentCount: string;
  lastPost: TopicLastPost;
}

export interface SearchTopicsOutput extends Pagination<SearchTopics> {}

export interface TopicDetailOutput extends MTeamTimestamp {
  id: string;
  forumId: string;
  topicId: string;
  authorId: string;
  author: string;
  body: string;
  oriBody: string;
  editBy: string | null;
  editById: string | null;
  editDate: string | null;
}
