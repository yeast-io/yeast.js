import Seed from './seed.js';

export interface BunOptions {
  // To generate an api key, visit m-team's Laboratory page.
  key: string;
  // Example: https://m-*.*/**. Default is test environment of m-team.
  url?: string;
}

class Bun {

  public seed: Seed;

  constructor(protected options: BunOptions) {
    if (typeof options !== 'object') {
      throw new Error('options must be an object of type ISteamedBunOptions');
    }

    if (!options.key) {
      throw new Error('options.key is required');
    }

    this.seed = new Seed(options);
  }
}

export default Bun;


