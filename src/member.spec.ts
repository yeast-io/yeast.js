import Bread from './main.js';
import { describe, it } from 'bun:test';
import { expect } from 'chai';
import { has } from './utils.js';


describe('🌭 Member', () => {

  const bread = new Bread({ key: process.env.M_TEAM_API_KEY as string});

  it('- should be able to get the base information of a member', async () => {
    const base = await bread.member.base(315125);
    expect(base).to.be.an('object');
    expect(base).to.have.property('username');
    expect(base).to.have.property('lastBrowse');
  });

  it('- should be able to get the base information of members', async () => {
    const bases = await bread.member.bases([ 315125 ]);
    expect(bases).to.be.an('object');
    expect(has(bases, '315125')).to.be.true;
    expect(bases['315125']).to.have.property('username');
    expect(bases['315125']).to.have.property('lastBrowse');
  });

});
