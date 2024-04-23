import Bread from './bread.js';
import { describe, it, mock } from 'bun:test';
import { expect } from 'chai';
import { CreateSeekTorrentInput } from './interfaces/seek/input.type.js';


describe('🌳 Seek', () => {

  const bread = new Bread({ key: process.env.M_TEAM_API_KEY as string });


  it('- should be able to add more excess rewards to the torrent-seeking request', async () => {
    const seekId = 23943;
    const reward = 100;
    bread.seek.addTo = mock(() => Promise.resolve(true));
    expect(await bread.seek.addTo(seekId, reward)).to.be.true;
    mock.restore();
  });


  it('- should be able to create a request to seek the torrent', async () => {

    const options: CreateSeekTorrentInput = <CreateSeekTorrentInput>{};
    try {
      await bread.seek.create(options);
    } catch (err) {
      expect(err).is.instanceof(Error);
    }

    options['title'] = 'Bread.js is testing to seek the torrent 2';
    try {
      await bread.seek.create(options);
    } catch (err) {
      expect(err).is.instanceof(Error);
    }

    options['category'] = 401;
    try {
      await bread.seek.create(options);
    } catch (err) {
      expect(err).is.instanceof(Error);
    }

    options['reward'] = 1000;

    try {
      await bread.seek.create(options);
    } catch (err) {
      expect(err).is.instanceof(Error);
    }

    bread.seek.create = mock(() => Promise.resolve('23943'));
    options['intro'] = 'Bread.js is testing to seek the torrent 2';
    const seekId = await bread.seek.create(options);
    expect(seekId).to.be.a('string');
    expect(parseInt(seekId, 10)).to.be.a('number');
    mock.restore();
  });


  it('- should be able to get the detail of the seeking torrent', async () => {
    const seekId = 23947;
    // bread.seek.detail = mock(() => Promise.resolve({
    //   submitList: {},
    //   submitTakeIds: [],
    //   addList: [],
    //   detail: {
    //     createdDate: '2024-04-20 00:35:04',
    //     lastModifiedDate: '2024-04-20 00:35:04',
    //     id: '23947',
    //     title: 'Bread.js is testing to seek the torrent 2',
    //     category: '401',
    //     source: null,
    //     standard: null,
    //     imdb: null,
    //     douban: null,
    //     dmmCode: null,
    //     intro: 'Bread.js is testing to seek the torrent 2',
    //     rewardOriginal: '1000',
    //     rewardCurrent: '1000',
    //     take: false,
    //     author: '315125',
    //     comments: '0',
    //     submitNum: '0',
    //     takeNum: '0',
    //     editedBy: null
    //   }
    // }));
    expect(await bread.seek.detail(seekId)).to.be.an('object');
    mock.restore();
  });

  it('- should be able to update the request of seeking torrent', async () => {

    const now = Date.now();
    const r = await bread.seek.edit({
      intro: 'Bread.js is testing to seek the torrent 23 - ' + now,
      category: 401,
      reward: 2000,
      seekId: 23947,
      title: 'Bread.js is testing to seek the torrent 23 - ' + now
    });
    expect(r).to.be.true;
  });

  it('- should be able to submit the related torrent to the seeking request', async () => {

    const seekId = 23947;
    const torrentId = 1;
    bread.seek.submit = mock(() => Promise.resolve(true));
    expect(await bread.seek.submit(seekId, torrentId)).to.be.true;
    mock.restore();

  });

  it('- should be able to search the request of seeking torrent', async () => {

    const requests = await bread.seek.search();
    expect(requests).to.be.an('object');
    expect(requests.data).to.be.an('array');
    expect(requests.data.length).to.be.greaterThan(0);

  });


  it('- should be able to take the answer of the seeking torrent', async () => {

    try {
      // @ts-ignore
      await bread.seek.take(23947);
    } catch (err) {
      expect(err).is.instanceof(Error);
    }

    try {
      // @ts-ignore
      await bread.seek.take('23947', []);
    } catch (err) {
      expect(err).is.instanceof(Error);
    }

    bread.seek.take = mock(() => Promise.resolve(true));
    expect(await bread.seek.take(23947, [1])).to.be.true;
    mock.restore();
  });


  it('- the unimplemented error should be thrown out when call recovery', async () => {

    try {
      await bread.seek.recovery();
    } catch (err) {
      expect(err).is.instanceof(Error);
    }

  });

});
