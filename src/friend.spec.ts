import Yeast from './yeast';
import { describe, it } from 'mocha';
import { expect } from 'chai';



describe('👬🏻 Friend', () => {

  const yeast = new Yeast({ key: process.env.M_TEAM_API_KEY as string});


  it('- should be able to add a friend', async () => {
    // https://test2.*.*/profile/detail/262903
    const added = await yeast.friend.addFriend('262903');
    expect(added).to.be.true;
  });

  it('- should be able to list the friend list', async () => {
    const friends = await yeast.friend.getFriends();
    expect(friends).to.be.an('array');
    expect(friends).to.have.length.greaterThan(0);
  });

  it('- should be able to remove a friend from the list', async () => {
    const removed = await yeast.friend.removeFriend('262903');
    expect(removed).to.be.true;
  });

  it('- should be able to add a block', async () => {
    const added = await yeast.friend.addBlock('262903');
    expect(added).to.be.true;
  });

  it('- should be able to list the block list', async () => {
    const blocks = await yeast.friend.getBlocks();
    expect(blocks).to.be.an('array');
    expect(blocks).to.have.length.greaterThan(0);
  });

  it('- should be able to remove a block from the list', async () => {
    const removed = await yeast.friend.removeBlock('262903');
    expect(removed).to.be.true;
  });

});
