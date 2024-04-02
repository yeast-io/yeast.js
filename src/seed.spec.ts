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

});
