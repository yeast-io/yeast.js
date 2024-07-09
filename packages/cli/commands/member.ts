import Yeast from 'yeast.js';
import { table } from 'table';
import { IConfig } from './config.js';


class Member {

  protected readonly yeast: Yeast;

  constructor(protected config: IConfig) {
    this.yeast = new Yeast(config);
  }


  public async show() {
    const state = await this.yeast.lab.funcState();
    const headers = ['Adult Group State', 'Adult Mode State'];
    console.info(table([headers, [state.adultGroup, state.adultMode]]));
  }

  public async switch(state: 'ON' | 'OFF') {
    const headers = ['Adult Group State', 'Adult Mode State'];
    if (state === 'ON') {
      await this.yeast.lab.tiggerFunc({ adultGroup: true, adultMode: true });
      const state = await this.yeast.lab.funcState();
      console.info(table([headers, [state.adultGroup, state.adultMode]]));
    } else {
      await this.yeast.lab.tiggerFunc({ adultGroup: false, adultMode: false });
      const state = await this.yeast.lab.funcState();
      console.info(table([headers, [state.adultGroup, state.adultMode]]));
    }
  }

}

export default Member;
