import Seed from '../../src/seed.js';
import { loadConfig } from './config.js';


class Search {

  protected readonly seed: Seed;

  constructor() {
    this.seed = new Seed(loadConfig());
  }

}


export default Search;
