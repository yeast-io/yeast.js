import { describe, it } from 'mocha';
import { expect } from 'chai';
import Tracker from './tracker.js';

describe('Tracker', () => {
  const tracker = new Tracker({ key: process.env.M_TEAM_API_KEY as string });

  it('should be able to get the list of clients', async () => {
    const clients = await tracker.clientList('315125');
    expect(clients).to.be.an('array');
  });

  it.skip('should be able to flush ghost torrents', async () => {
    const response = await tracker.flush('315125');
    expect(response).to.be.true;
  });

  it('should be able to get the bonus information of the member', async () => {
    const bonus = await tracker.mybonus('315125');
    expect(bonus).to.be.an('object');
    expect(bonus).to.have.property('formulaParams');
    expect(bonus).to.have.property('bonus');
  });

  it('should be able to get the peer status of the member', async () => {
    const peerStatus = await tracker.myPeerStatus();
    expect(peerStatus).to.be.an('object');
    expect(peerStatus).to.have.property('leecher');
    expect(peerStatus).to.have.property('seeder');
  });

  it('should throw an error when announce is called', async () => {
    try {
      await tracker.announce();
    } catch (err: any) {
      expect(err.name).to.equal('UnimplementedMethodError');
    }
  });

  it('should throw an error when scrape is called', async () => {
    try {
      await tracker.scrape();
    } catch (err: any) {
      expect(err.name).to.equal('UnimplementedMethodError');
    }
  });

  it('should throw an error when clientTest is called', async () => {
    try {
      await tracker.clientTest();
    } catch (err: any) {
      expect(err.name).to.equal('UnimplementedMethodError');
    }
  });

  it('should throw an error when queryHistory is called', async () => {
    try {
      await tracker.queryHistory();
    } catch (err: any) {
      expect(err.name).to.equal('UnimplementedMethodError');
    }
  });
});
