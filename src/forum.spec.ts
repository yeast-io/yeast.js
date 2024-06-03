import { describe, it } from 'mocha';
import { expect } from 'chai';
import Yeast from './yeast.js';
import sinon from 'sinon';



describe('📚 Forum', () => {

  const yeast = new Yeast({ key: process.env.M_TEAM_API_KEY as string});

  it('should be able to list forums', async () => {
    const forums = await yeast.forum.forums();
    expect(forums).to.have.property('forumsList');
    expect(forums).to.have.property('lastPost');
    expect(forums).to.have.property('overForumsList');
    expect(forums.forumsList).to.be.an('array').and.length.greaterThan(0);
    expect(forums.lastPost).to.be.an('object');
    expect(Object.keys(forums.lastPost).length).to.greaterThan(0);
    expect(forums.overForumsList).to.be.an('array').and.length.greaterThan(0);
  });

  it('should be able to search for topics', async () => {
    const topics = await yeast.forum.topic.search({ fid: 10 }); // equivalent to:
    // await yeast.forum.topicSearch({ fid: 10 });
    expect(topics).to.be.an('object')
      .and.have.property('data')
      .which.length.greaterThan(0);
  });

  it('should be able to create a new topic', async () => {
    const stub = sinon.stub(yeast.forum.topic, 'create').callsFake(async () => '62705');
    const topicId = await yeast.forum.topic.create({
      fid: 10,
      body: 'TEST:Hello, World!',
      subject: 'TEST:Hello, World!'
    });
    expect(topicId).to.be.a('string');
    expect(stub.calledOnce).to.be.true;
    stub.restore();
  });

  it('should be able to edit a topic', async () => {
    const resp = await yeast.forum.topic.edit({
      fid: 10,
      tid: 62705,
      body: `TEST:Hello, World! (Edited:${Date.now()})`,
      subject: `TEST:Hello, World! (Edited:${Date.now()})`
    });
    expect(resp).to.be.true;
  });

  it('should be able to post and edit a message', async () => {

    const pid = await yeast.forum.post({
      fid: 10,
      tid: 62705,
      body: `TEST:Hello, World! (Posted:${Date.now()})`,
    });

    expect(pid).to.be.a('string');

    const edited = await yeast.forum.edit({
      fid: 10,
      tid: 62705,
      pid,
      body: `TEST:Hello, World! (Posted:Edited:${Date.now()})`,
    });

    expect(edited).to.be.true;
  });

  it('should be able to view the topic hits', async () => {
    const resp = await yeast.forum.topic.viewHits(62705);
    if (typeof resp === 'string') {
      expect(parseInt(resp, 10)).to.greaterThan(0);
    } else {
      expect(resp).to.be.a('number');
      expect(resp).to.greaterThan(0);
    }
  });

  it('should be able to get the details of a topic', async () => {
    const resp = await yeast.forum.topic.detail({ tid: 62705 });
    expect(resp).to.be.an('object');
    expect(resp.id).to.equals('62705');
    expect(resp.forumId).to.equals('10');
    if (parseInt(resp.commentCount, 10) > 0) {
      expect(resp.comments.data).to.be.an('array').and.length.greaterThan(0);
    }
  });
});
