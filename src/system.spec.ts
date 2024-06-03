import Yeast from './yeast.js';
import { describe, it } from 'mocha';
import { expect } from 'chai';


describe('🖇️System', () => {

  const yeast = new Yeast({ key: process.env.M_TEAM_API_KEY as string });

  it('- should be able to get the list of banned users', async () => {
    const users = await yeast.sys.banlogs({ pageSize: 100, pageNumber: 1 });
    expect(users).to.be.an('object');
    expect(users).to.have.property('data');
    expect(users.data.length).to.lessThanOrEqual(100);
  });

  it('- should be able to get the list of countries', async () => {
    const countries = await yeast.sys.countryList();
    expect(countries).to.be.an('array');
    expect(countries.length).to.greaterThanOrEqual(1);
  });

  it('- should be able to say hello to the server', async () => {
    const communicated = await yeast.sys.hello();
    expect(communicated).to.be.true;
  });

  it('- should be able to get the IP region', async () => {
    const region = await yeast.sys.ip('8.8.8.8');
    expect(region).to.be.a('string');
    expect(region.length).to.greaterThan(0);
  });

  it('- should be able to get the ASN of IP address', async () => {
    const asn = await yeast.sys.ipASN('8.8.8.8');
    expect(asn).to.be.a('string');
    expect(asn.length).to.greaterThan(0);
  });

  it('- should be able to get the list of languages', async () => {
    const langs = await yeast.sys.langs();
    expect(langs).to.be.an('array');
    expect(langs.length).to.greaterThanOrEqual(1);
  });

  it('- should be able to get the news from server', async () => {
    const news = await yeast.sys.news();
    expect(news).to.be.an('array');
    expect(news.length).to.greaterThanOrEqual(0);
  });


  it('- should be able to get the list of staff', async () => {
    const staff = await yeast.sys.staff();
    expect(staff).to.be.an('object');
    expect(staff.staffRoleIds).to.be.an('array');
    expect(staff.staffRoleIds.length).to.greaterThanOrEqual(0);
    expect(staff.members).to.be.an('array');
    expect(staff.members.length).to.greaterThanOrEqual(0);
  });

  it('- should be able to get the state of the server', async () => {
    const state = await yeast.sys.state();
    expect(state).to.be.an('object');
    expect(state).to.have.property('userMax');
    expect(state).to.have.property('userCount');
    expect(state).to.have.property('banUserCount');
  });

  it('- should return system configuration when sysConf is called', async () => {
    const config = await yeast.sys.sysConf();
    expect(config).to.be.an('object');
    expect(config).to.have.property('SITE_NAME');
    expect(config).to.have.property('OPEN_REGISTER');
    // Add more assertions for all properties of the SystemConfigOutput interface
  });

});
