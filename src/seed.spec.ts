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
});
