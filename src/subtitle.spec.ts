import Bread from './bread.js';
import { expect } from 'chai';
import { describe, it } from 'bun:test';


describe.only('🎬 Subtitle Unit Test', () => {

  const bread = new Bread({ key: process.env.M_TEAM_API_KEY as string });

  it('should be able to get the subtitle langs', async () => {
    const langs = await bread.subtitle.langs();
    expect(langs).to.be.an('array').and.length.greaterThan(0);
  });

  it('should be able to get the list of subtitles', async () => {
    const subtitles = await bread.subtitle.search();
    expect(subtitles.data).to.be.an('array').and.length.greaterThan(0);
  });

  it('should be able to get the list of subtitles with keyword', async () => {
    const subtitles = await bread.subtitle.search({ keyword: 'avengers' });
    expect(subtitles.data).to.be.an('array').and.length.greaterThan(0);

    for (const subtitle of subtitles.data) {
      expect(subtitle.name.toLowerCase()).to.include('avengers');
    }
  });
});
