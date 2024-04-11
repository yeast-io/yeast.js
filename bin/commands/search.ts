import bytes from 'bytes';
import Seed from '../../src/seed.js';
import { loadConfig } from './config.js';
import { table } from 'table';


class Search {

  protected readonly seed: Seed;

  constructor() {
    this.seed = new Seed(loadConfig());
  }


  public async movies(mode: 'normal', limit?: number) {
    return await this.seed.search({ mode, pageSize: limit, standards: ['6'] });
  }


  public output(movies: Record<string, any>) {
    const headers = ['ID', 'Chinese Name', 'Created Time', 'Size', 'Seeder', 'Leecher'];
    const body = movies.data.map((movie: Record<string, any>) => {
      return [
        movie.id, movie.smallDescr, movie.createdDate,
        (bytes(parseInt(movie.size, 10), { unit: 'gb'})).toUpperCase(),
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
        { alignment: 'center', width: 10 },
        { alignment: 'center', width: 8 },
        { alignment: 'center', width: 8 },
      ]
    }));
  }

}


export default Search;
