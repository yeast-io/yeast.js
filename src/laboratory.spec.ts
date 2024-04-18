import Bread from './bread.js';
import { describe, it } from 'bun:test';
import { expect } from 'chai';


describe('⚙️ Laboratory', () => {

  const bread = new Bread({ key: process.env.M_TEAM_API_KEY as string});

  it('- should be able to switch the laboratory state', async () => {
    // case 1
    const updated0 = await bread.laboratory.switch({ adultGroup: false, adultMode: false });
    expect(updated0).to.be.true;
    const states0 = await bread.laboratory.state();
    expect(states0).to.have.property('adultGroup');
    expect(states0.adultGroup).to.be.false;
    expect(states0.adultMode).to.be.false;


    // case 2
    const updated = await bread.lab.switch({ adultGroup: true, adultMode: true });
    expect(updated).to.be.true;
    const states = await bread.lab.state();
    expect(states).to.have.property('adultGroup');
    expect(states.adultGroup).to.be.true;
    expect(states).to.have.property('adultMode');
    expect(states.adultMode).to.be.true;
  });

});
