import Bread from './main.js';
import { describe, it } from 'bun:test';
import { expect } from 'chai';
import { has } from './utils.js';


describe('🤴 Member', () => {

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

  it('- should be able to get the torrents of member', async () => {
    const torrents = await bread.member.getUserTorrentList({ userid: 315125 });
    expect(torrents).to.be.an('object');
    expect(torrents).to.have.property('data');
    expect(torrents.data).to.be.an('array');
    expect(torrents.data).to.have.length.greaterThan(0);
  });

  it('- should be able to update security of the member', async () => {
    const updated = await bread.member.updateSecurity({ privacy: 'LOW' });
    expect(updated).to.be.true;
  });

  it('- should be able to update the profile of the member', async () => {
    const updated = await bread.member.updateProfile({
      avatarUrl: 'https://example.com/avatar.png',
      info: 'This is a post request from the test suite.',
      gender: 'MALE'
    });
    expect(updated).to.be.true;
  });

  it('- should be able to get the system roles', async () => {
    const roles = await bread.member.sysRoleList();
    expect(roles).to.be.an('array');
    expect(roles).to.have.length.greaterThan(0);
  });

  it.skip('- should be able to send the passkey to the member\'s email', async () => {
    const sent = await bread.member.sendPasskey();
    expect(sent).to.be.true;
  });

  it('- should be able to get member profile', async () => {
    const profile = await bread.member.profile(315125);
    expect(profile).to.be.an('object');
    expect(profile).to.have.property('username');
    expect(profile).to.have.property('email');
    expect(profile).to.have.property('memberStatus');
    expect(profile).to.have.property('memberCount');
  });

});
