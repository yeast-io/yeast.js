import Bread from './main.js';
import { describe, it } from 'node:test';
import { expect } from 'chai';
import { has } from './utils.js';


describe('# Seed Unit Test', () => {

  const bread = new Bread({ key: process.env.M_TEAM_API_KEY as string });

  describe('# Search filter list Unit Test', () => {
    it('- should be able to get a list of audio codec', async () => {
      const list = await bread.seed.audioCodecList();
      expect(list).to.be.an('array');
      expect(list.length).to.be.greaterThan(0);
    });

    it('- should be able to get a list of categories', async () => {
      const obj = await bread.seed.categoryList();
      expect(Object.keys(obj).length).to.be.greaterThan(0);
    });


    it('- should be able to get a list of medium ', async () => {
      const mediums = await bread.seed.mediumList();
      expect(mediums).to.be.an('array');
      expect(mediums.length).to.be.greaterThan(0);
    });

    it('- should be able to get a list of processing', async () => {
      const list = await bread.seed.processingList();
      expect(list).to.be.an('array');
      expect(list.length).to.be.greaterThan(0);
    });

    it('- should be able to get a list of source', async () => {
      const list = await bread.seed.sourceList();
      expect(list).to.be.an('array');
      expect(list.length).to.be.greaterThan(0);
    });

    it('- should be able to get a list of standard', async () => {
      const list = await bread.seed.standardList();
      expect(list).to.be.an('array');
      expect(list.length).to.be.greaterThan(0);
    });

    it('- should be able to get a list of team', async () => {
      const list = await bread.seed.teamList();
      expect(list).to.be.an('array');
      expect(list.length).to.be.greaterThan(0);
    });

    it('- should be able to get a list of video codec', async () => {
      const list = await bread.seed.videoCodecList();
      expect(list).to.be.an('array');
      expect(list.length).to.be.greaterThan(0);
    });
  });



  it('- should be able to get a collection', async () => {
    const obj = await bread.seed.collection(1, true);
    // TODO: figure out the response of this method
    expect(obj).to.be.null;
  });

  it('- should be able to get douban info by url', async () => {
    const url = 'https://movie.douban.com/subject/26608246/';
    const obj = await bread.seed.doubanInfo(url);
    expect(obj).to.be.an('object');
    const parts = url.split('/').filter((part) => part !== '');
    expect(parts[parts.length - 1]).to.be.equal(obj.id);
  });


  it('- should be able to get files of a torrent', async () => {
    const obj = await bread.seed.files(766707);
    expect(obj).to.be.an('array');
    expect(obj.length).to.be.greaterThan(0);
  });

  it('- should be able to get a downloadable url of the torrent', async () => {

    const url = await bread.seed.genDlToken(766707);
    expect(url).to.be.a('string');
    expect(url.startsWith('http')).to.be.true;
  });

  it('- should be able to get the info from IMDB', async () => {
    const obj = await bread.seed.imdbInfo('tt0068646');
    expect(obj).to.be.an('object');
  });



  it('- should be able to get the peers information', async () => {
    const peers = await bread.seed.peers(766707);
    expect(peers).to.be.an('array');
  });



  it('- should be able to get the torrent tracker user history', async () => {
    const history = await bread.seed.queryTorrentTrackerHistory({ torrent: 766707 });
    expect(history).to.be.an('object');
    expect(history.data).to.be.an('array');
    expect(history.data.length).to.be.greaterThan(0);
  });


  it.skip('- should be able to make a request to ask someone to reseed', async () => {
    const asked = await bread.seed.requestReseed(766435);
    expect(asked).to.be.true;
    // It's been asked, should return false
    const again = await bread.seed.requestReseed(766435);
    expect(again).to.be.false;
  });

  it('- should be able to get the reward status of the torrent', async () => {
    const status = await bread.seed.rewardStatus(766590);
    expect(status).to.be.an('object');
    expect(status.rewardList).to.be.an('array');
  });

  it.skip('- should be able to say thanks to the uploader', async () => {
    const thanked = await bread.seed.sayThank(766435);
    expect(thanked).to.be.true;

    // It's been thanked, should return false
    const again = await bread.seed.sayThank(766435);
    expect(again).to.be.false;
  });

  it('- should be able to search torrents', async () => {
    const torrents = await bread.seed.search({
      mode: 'movie',
      discount: 'NORMAL',
      sortField: 'CREATED_DATE',
      sortDirection: 'DESC',
      keyword: 'Dune',
    });
    expect(torrents.data).to.be.an('array');
    expect(has(torrents, 'total')).to.be.true;
    expect(has(torrents, 'pageNumber')).to.be.true;
    expect(has(torrents, 'pageSize')).to.be.true;
    expect(has(torrents, 'totalPages')).to.be.true;
  });

  it('- should be able to get the thanks status of the torrent', async () => {
    const status = await bread.seed.thanksStatus(766795);
    expect(status).to.be.an('object');
    expect(status.thanksList).to.be.an('array');
  });

  it('- should be able to get the view hits of the torrent', async () => {
    const hits = await bread.seed.viewHits(766435);
    expect(hits).to.be.a('string');
    expect(parseInt(hits, 10)).to.be.greaterThan(0);
  });

});
