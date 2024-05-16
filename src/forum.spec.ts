import { describe, it } from 'bun:test';
import Bread from './bread.js';
import { expect } from 'chai';


describe.only('📚 Forum', () => {

  const bread = new Bread({ key: process.env.M_TEAM_API_KEY as string});

  it('should be able to list forums', async () => {
    await bread.forum.forums();
    // equivalent
    await bread.forum.topic.search({ fid: 10 });
    await bread.forum.topicSearch({ fid: 10 });
  });

  // it('should be able to create a new topic', async () => {
  //   const resp = await bread.forum.topic.create({
  //     fid: 10,
  //     body: 'TEST:Hello, World!',
  //     subject: 'TEST:Hello, World!'
  //   });
  //   expect(resp).to.be.true;
  // });

  it('should be able to view the topic hits', async () => {
    const resp = await bread.forum.topic.viewHits(62705);
    if (typeof resp === 'string') {
      expect(parseInt(resp, 10)).to.greaterThan(0);
    } else {
      expect(resp).to.be.a('number');
      expect(resp).to.greaterThan(0);
    }
  });

  //TODO: Add more tests for topic methods
});
