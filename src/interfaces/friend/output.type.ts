import { MTeamTimestamp } from '../base.type.js';


/**
 * @description The interface represents the output of the getting friends
 */
export interface GetFriendsOutput extends MTeamTimestamp {
  id: string;
  friendid: string;
  userid: string;
}

/**
 * @description The interface represents the output of the getting blocks
 */
export interface GetBlocksOutput extends MTeamTimestamp {
  id: string;
  blockid: string;
  userid: string;
}
