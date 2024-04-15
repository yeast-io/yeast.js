import bytes from 'bytes';
import Seed from '../../src/seed.js';
import { loadConfig } from './config.js';
import { table } from 'table';


class Search {

  protected readonly seed: Seed;

  constructor() {
    this.seed = new Seed(loadConfig());
  }

  public async peers(torrentId: number) {
    const peers = await this.seed.peers(torrentId);
    const headers = [ 'Seeder', 'Leecher' ];
    let seeder = 0, leecher = 0;
    for (const peer of peers) {
      if (peer.left === '0') {
        seeder++;
        continue
      }

      leecher++;
    }

    console.info(table([ headers, [ seeder, leecher ] ], {
      columns: [
        { alignment: 'center', width: 8 },
        { alignment: 'center', width: 8 }
      ]
    }));
  }

  public async movies(mode: 'normal', limit?: number) {
    const movies = await this.seed.search({ mode, pageSize: limit, standards: ['6'] });
    const headers = ['ID', 'Chinese Name', 'Created Time', 'Size/Discount', 'Seeder', 'Leecher'];
    const body = movies.data.map((movie: Record<string, any>) => {
      return [
        movie.id, movie.smallDescr, movie.createdDate,
        ((bytes(parseInt(movie.size, 10), { unit: 'gb'})).toUpperCase() + '/' + (movie.status.discount || 'N/A')),
        movie.status.seeders, movie.status.leechers
      ];
    });

    body.unshift(headers);

    console.info(table(body, {
      columns: [
        // { alignment: 'center', width: 50, truncate: 50 },
        { alignment: 'center', width: 8 },
        { alignment: 'center', width: 50 },
        { alignment: 'center', width: 22 },
        { alignment: 'center', width: 16 },
        { alignment: 'center', width: 8 },
        { alignment: 'center', width: 8 },
      ]
    }));
  }

}


export default Search;
