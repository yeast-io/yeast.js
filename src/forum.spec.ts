import { describe, it } from 'bun:test';
import Bread from './bread.js';

describe.only('📚 Forum', () => {

  const bread = new Bread({ key: process.env.M_TEAM_API_KEY as string});

  it('should be able to list forums', async () => {
    const resp = await bread.forum.forums();
    console.info(resp);
  });
});