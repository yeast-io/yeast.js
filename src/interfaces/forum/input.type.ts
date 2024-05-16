/**
 * Interface for the input parameters when searching topics.
 * @interface
 * @property {string | number} fid - The forum ID.
 * @property {number} [pageNumber] - The page number for pagination. Optional.
 * @property {number} [pageSize] - The number of items per page for pagination. Optional.
 */
export interface SearchTopicInput {
  fid: string | number;
  pageNumber?: number;
  pageSize?: number;
}

/**
 * Interface for the input parameters when creating a forum.
 * @interface
 * @property {string | number} fid - The forum ID.
 * @property {string} subject - The subject of the forum.
 * @property {string} body - The body of the forum.
 */
export interface CreateTopicInput {
  fid: string | number;
  subject: string;
  body: string;
}

/**
 * Interface for the input parameters when getting topic details.
 * @interface
 * @property {number} [pageSize] - The number of items per page for pagination. Optional.
 * @property {number} [pageNumber] - The page number for pagination. Optional.
 * @property {string | number} tid - The topic ID.
 */
export interface TopicDetailInput {
  pageSize?: number;
  pageNumber?: number;
  tid: string | number;
}

/**
 * Interface for the input parameters when editing a topic.
 * @interface
 * @property {string | number} fid - The forum ID.
 * @property {string | number} tid - The topic ID.
 * @property {string} subject - The subject of the topic.
 * @property {string} body - The body of the topic.
 */
export interface TopicEditInput {
  fid: string | number;
  tid: string | number;
  subject: string;
  body: string;
}


/**
 * Interface for the input parameters when posting a message to a topic.
 * @interface
 * @property {string | number} fid - The forum ID.
 * @property {string | number} tid - The topic ID.
 * @property {string} body - The body of the message.
 */
export interface PostMessageToTopicInput {
  fid: string | number;
  tid: string | number;
  body: string;
}

/**
 * Interface for the input parameters when editing a posted message.
 * @interface
 * @property {string | number} fid - The forum ID.
 * @property {string | number} tid - The topic ID.
 * @property {string | number} pid - The post ID.
 * @property {string} body - The body of the message.
 */
export interface EditPostedMessageInput {
  fid: string | number;
  tid: string | number;
  pid: string | number;
  body: string;
}
