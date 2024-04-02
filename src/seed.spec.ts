import Bun from './main.js';
import { describe, it } from 'node:test';
import { expect } from 'chai';


describe('# Seed Unit Test', () => {

  const bun = new Bun({ key: process.env.M_TEAM_API_KEY as string });

  it('- should be able to get a list of audio codec', async () => {
    const resp = await bun.seed.audioCodecList();
    expect(parseInt(resp.code, 10)).to.be.equal(0);
    const list = resp.data;
    expect(list).to.be.an('array');
    expect(list.length).to.be.greaterThan(0);
  });

  it('- should be able to get a list of categories', async () => {
    const resp = await bun.seed.categoryList();
    expect(parseInt(resp.code, 10)).to.be.equal(0);
    const obj = resp.data;
    expect(Object.keys(obj).length).to.be.greaterThan(0);
  });

});
