import Bun from './main.js';
import { describe, it } from 'node:test';
import { expect } from 'chai';


describe('# Seed Unit Test', () => {

  const bun = new Bun({ key: process.env.M_TEAM_API_KEY as string });

  it('- should be able to get a list of audio codec', async () => {
    const list = await bun.seed.audioCodecList();
    expect(list).to.be.an('array');
    expect(list.length).to.be.greaterThan(0);
  });

  it('- should be able to get a list of categories', async () => {
    const obj = await bun.seed.categoryList();
    expect(Object.keys(obj).length).to.be.greaterThan(0);
  });


  it('- should be able to get a collection', async () => {
    const obj = await bun.seed.collection(1, true);
    // TODO: figure out the response of this method
    expect(obj).to.be.null;
  });

  it('- should be able to get douban info by url', async () => {
    const url = 'https://movie.douban.com/subject/26608246/';
    const obj = await bun.seed.doubanInfo(url);
    expect(obj).to.be.an('object');
    const parts = url.split('/').filter((part) => part !== '');
    expect(parts[parts.length - 1]).to.be.equal(obj.id);
  });


  it('- should be able to get files of a torrent', async () => {
    const obj = await bun.seed.files(766707);
    expect(obj).to.be.an('array');
    expect(obj.length).to.be.greaterThan(0);
  });

  it('- should be able to get a downloadable url of the torrent', async () => {

    const url = await bun.seed.genDlToken(766707);
    expect(url).to.be.a('string');
    expect(url.startsWith('http')).to.be.true;
  });

  it('- should be able to get the info from IMDB', async () => {
    const obj = await bun.seed.imdbInfo('tt0068646');
    expect(obj).to.be.an('object');
  });

  it('- should be able to get a list of medium ', async () => {
    const mediums = await bun.seed.mediumList();
    expect(mediums).to.be.an('array');
    expect(mediums.length).to.be.greaterThan(0);
  });

  it('- should be able to get the peers information', async () => {
    const peers = await bun.seed.peers(766707);
    expect(peers).to.be.an('array');
  });

  it('- should be able to get the list of processing', async () => {
    const list = await bun.seed.processingList();
    expect(list).to.be.an('array');
    expect(list.length).to.be.greaterThan(0);
  });


  it('- should be able to make a request to ask someone to reseed', async () => {
    const asked = await bun.seed.requestReseed(766435);
    expect(asked).to.be.true;
    // It's been asked, should return false
    const again = await bun.seed.requestReseed(766435);
    expect(again).to.be.false;
  });

  it('- should be able to get the reward status of the torrent', async () => {
    const status = await bun.seed.rewardStatus(766590);
    expect(status).to.be.an('object');
    expect(status.rewardList).to.be.an('array');
  });
});
