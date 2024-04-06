import Seed from './seed.js';

export interface BreadOptions {
  // To generate an api key, visit m-team's Laboratory page.
  key: string;
  // Example: https://m-*.*/**. Default is test environment of m-team.
  url?: string;
}

class Bread {

  public seed: Seed;

  constructor(protected options: BreadOptions) {
    if (typeof options !== 'object') {
      throw new Error('options must be an object of type BreadOptions');
    }

    if (!options.key) {
      throw new Error('options.key is required');
    }

    this.seed = new Seed(options);
  }
}

export default Bread;


