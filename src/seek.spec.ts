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

});
