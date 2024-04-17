import Laboratory from '../../src/laboratory.js';
import { loadConfig } from './config.js';
import { table } from 'table';


class Member {

  protected readonly lab: Laboratory;

  constructor() {
    this.lab = new Laboratory(loadConfig());
  }


  public async show() {
    const state = await this.lab.funcState();
    const headers = ['Adult Group State', 'Adult Mode State'];
    console.info(table([headers, [state.adultGroup, state.adultMode]]));
  }

  public async switch(state: 'ON' | 'OFF') {
    const headers = ['Adult Group State', 'Adult Mode State'];
    if (state === 'ON') {
      await this.lab.tiggerFunc({ adultGroup: true, adultMode: true });
      const state = await this.lab.funcState();
      console.info(table([headers, [state.adultGroup, state.adultMode]]));
    } else {
      await this.lab.tiggerFunc({ adultGroup: false, adultMode: false });
      const state = await this.lab.funcState();
      console.info(table([headers, [state.adultGroup, state.adultMode]]));
    }
  }

}

export default Member;
