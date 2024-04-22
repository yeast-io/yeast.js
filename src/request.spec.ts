import Request from './request.js';
import { describe, it } from 'bun:test';
import { expect } from 'chai';



describe('🐦 Request', () => {

  const request = new Request({ key: process.env.M_TEAM_API_KEY as string });

  it('should be failed if the key is not provided for build-in constructor', async () => {

    try {
      new Request({ key: '' });
    } catch (err) {
      expect(err).is.instanceof(Error);
    }

  });

  it('should be failed if the options is not provided for POST method', async () => {

      try {
        // @ts-ignore
        await request.post();
      } catch (err) {
        expect(err).is.instanceof(Error);
      }
  });


  it('should be failed if the method is not found by builder', async () => {

    try {
      // @ts-ignore
      await request.post({ method: 'not_found' });
    } catch (err) {
      expect(err).is.instanceof(Error);
    }

  });


});
