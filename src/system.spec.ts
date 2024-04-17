import Bread from './main.js';
import { describe, it } from 'bun:test';
import { expect } from 'chai';


describe('🖇️System', () => {

  const bread = new Bread({ key: process.env.M_TEAM_API_KEY as string });

  it('- should be able to get the list of banned users', async () => {
    const users = await bread.sys.banlogs({ pageSize: 100, pageNumber: 1 });
    expect(users).to.be.an('object');
    expect(users).to.have.property('data');
    expect(users.data.length).to.lessThanOrEqual(100);
  });

});
