import Yeast from './yeast.js';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { has } from './utils.js';


describe('🤴 Member', () => {

  const yeast = new Yeast({ key: process.env.M_TEAM_API_KEY as string});

  it('- should be able to get the base information of a member', async () => {
    const base = await yeast.member.base(315125);
    expect(base).to.be.an('object');
    expect(base).to.have.property('username');
    expect(base).to.have.property('lastBrowse');
  });

  it('- should be able to get the base information of members', async () => {
    const bases = await yeast.member.bases([ 315125 ]);
    expect(bases).to.be.an('object');
    expect(has(bases, '315125')).to.be.true;
    expect(bases['315125']).to.have.property('username');
    expect(bases['315125']).to.have.property('lastBrowse');
  });

  it('- should be able to get the torrents of member', async () => {
    const torrents = await yeast.member.getUserTorrentList({ userid: 315125 });
    expect(torrents).to.be.an('object');
    expect(torrents).to.have.property('data');
    expect(torrents.data).to.be.an('array');
    expect(torrents.data).to.have.length.greaterThan(0);
  });

  it('- should be able to update security of the member', async () => {
    const updated = await yeast.member.updateSecurity({ privacy: 'LOW' });
    expect(updated).to.be.true;
  });

  it('- should be able to update the profile of the member', async () => {
    const updated = await yeast.member.updateProfile({
      avatarUrl: 'https://example.com/avatar.png',
      info: 'This is a post request from the test suite.',
      gender: 'MALE'
    });
    expect(updated).to.be.true;
  });

  it('- should be able to get the system roles', async () => {
    const roles = await yeast.member.sysRoleList();
    expect(roles).to.be.an('array');
    expect(roles).to.have.length.greaterThan(0);
  });

  it.skip('- should be able to send the passkey to the member\'s email', async () => {
    const sent = await yeast.member.sendPasskey();
    expect(sent).to.be.true;
  });

  it('- should be able to get member profile', async () => {
    const profile = await yeast.member.profile(315125);
    expect(profile).to.be.an('object');
    expect(profile).to.have.property('username');
    expect(profile).to.have.property('email');
    expect(profile).to.have.property('memberStatus');
    expect(profile).to.have.property('memberCount');
  });

  it('- should be able to generate a OTP URL', async () => {
    const url = await yeast.member.genOTPUrl();
    expect(url).to.be.a('string');
    expect(url).to.have.string('otpauth://totp/');
  });

});
