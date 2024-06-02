import { describe, it } from 'mocha';
import Bread from './bread.js';
import { expect } from 'chai';


describe('🆙 RSS', () => {

  const bread = new Bread({ key: process.env.M_TEAM_API_KEY as string});

  it('should be able to generate RSS feed links', async () => {

    const urls = await bread.rss.genlink({ });
    expect(urls).to.have.property('readUrl');
    expect(urls).to.have.property('dlUrl');

  });

});


