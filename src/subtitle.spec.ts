import Yeast from './yeast';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';


describe('🎬 Subtitle Unit Test', () => {

  const yeast = new Yeast({ key: process.env.M_TEAM_API_KEY as string });

  it('should be able to get the subtitle langs', async () => {
    const langs = await yeast.subtitle.langs();
    expect(langs).to.be.an('array').and.length.greaterThan(0);
  });

  it('should be able to get the list of subtitles', async () => {
    const subtitles = await yeast.subtitle.search();
    expect(subtitles.data).to.be.an('array').and.length.greaterThan(0);
  });

  it('should be able to get the list of subtitles with keyword', async () => {
    const subtitles = await yeast.subtitle.search({ keyword: 'avengers' });
    expect(subtitles.data).to.be.an('array').and.length.greaterThan(0);

    for (const subtitle of subtitles.data) {
      expect(subtitle.name.toLowerCase()).to.include('avengers');
    }
  });

  it('should be able to get the uri of the subtitle', async () => {
    const subtitles = await yeast.subtitle.search({ keyword: 'avengers' });
    const subtitle = subtitles.data[0];
    const uri = await yeast.subtitle.genlink(subtitle.id);
    expect(uri).to.be.a('string').and.not.empty;
  });

  it('should be able to get the list of subtitles for a torrent', async () => {
    const subtitles = await yeast.subtitle.list('766793');
    expect(subtitles).to.be.an('array').and.length.greaterThan(0);
  });

  it('should be able to upload a subtitle', async () => {
    // Error: https://github.com/oven-sh/bun/issues/2264
    // This is the reason that I've removed bun for testing
    // https://www.npmjs.com/package/formdata-node#comparison
    const stub = sinon.stub(yeast.subtitle, 'upload')
      .callsFake(async () => true);
    const uploaded = await yeast.subtitle.upload({
      torrent: '766821',
      title: '[MT]Desperate.Sniper.2024.4K.WEB-DL.H265.AAC',
      file: '/Users/danielssun/Downloads/[MT]Desperate.Sniper.2024.4K.WEB-DL.H265.AAC.srt'
    });
    expect(stub.calledOnce).to.be.true;
    expect(uploaded).to.be.true;
    stub.restore();
  });
});
