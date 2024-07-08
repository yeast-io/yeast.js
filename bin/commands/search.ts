// @ts-ignore
import bytes from 'bytes';
import Seed from '../../src/seed.js';
import { isEmpty } from '../../src/utils.js';
import { table, Indexable, ColumnUserConfig } from 'table';
import { IConfig } from './config.js';


class Search {

  protected readonly seed: Seed;
  protected readonly headers = [ 'ID', 'Name', 'Created Time', 'Size/Discount', 'Seeder', 'Leecher' ];
  protected readonly columns: Indexable<ColumnUserConfig> = [
    { alignment: 'center', width: 8 },
    { alignment: 'center', width: 80 },
    { alignment: 'center', width: 22 },
    { alignment: 'center', width: 20 },
    { alignment: 'center', width: 8 },
    { alignment: 'center', width: 8 },
  ];

  constructor(protected config: IConfig) {
    this.seed = new Seed(config);
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

  public async packages() {
    const mode = 'adult';
    const results = await this.seed.search({ mode, pageSize: 15, pageNumber: 1, keyword: '' });
    const body = (
      results.data.map((pkg: Record<string, any>) => {
        if (pkg.status && pkg.status.toppingLevel < 1) { return null; }
        const ends = new Date(pkg.status.toppingEndTime).getTime();
        const now = Date.now();
        const diff = ends - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const ts = days > 0 ? `${days} days and ${hours} hours` : `${hours} hours`;
        return [
          pkg.id, `${pkg.name} (End In: ${ts})\n${pkg.smallDescr}`,
          pkg.createdDate,
          ((bytes(parseInt(pkg.size, 10),
            { unit: 'gb'})).toUpperCase() + '/' + (pkg.status.discount || 'N/A')),
          pkg.status.seeders, pkg.status.leechers
        ];
      })
    ).filter(el => !isEmpty(el));

    body.unshift(this.headers);

    console.info(table(body as any, { columns: this.columns }));
  }

  public async movies(mode: 'normal', keyword?: string | null, limit?: number) {
    keyword = keyword || null;
    limit = limit || 100;
    const options: any = { mode, pageSize: limit, standards: ['6'] };
    if (keyword) {
      options.keyword = keyword;
    }
    const movies = await this.seed.search(options);
    movies.data = movies.data.sort((a, b) => {
      return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
    });
    const body = movies.data.map((movie: Record<string, any>) => {
      return [
        movie.id, movie.name + '\n' + movie.smallDescr, movie.createdDate,
        ((bytes(parseInt(movie.size, 10), { unit: 'gb'})).toUpperCase() + '/' + (movie.status.discount || 'N/A')),
        movie.status.seeders, movie.status.leechers
      ];
    });

    body.unshift(this.headers);

    console.info(table(body, { columns: this.columns }));
  }

}


export default Search;
