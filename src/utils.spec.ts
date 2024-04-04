import { describe, it } from 'node:test';
import { expect } from 'chai';
import { isEmpty } from './utils.js';


describe('# Utils Unit Test', () => {

  it('- should be able to check whether is empty or not for a variety of types', () => {

    expect(isEmpty(null)).to.be.true;
    expect(isEmpty(undefined)).to.be.true;
    expect(isEmpty('')).to.be.true;
    expect(isEmpty([])).to.be.true;
    expect(isEmpty({})).to.be.true;

    expect(isEmpty('a')).to.be.false;
    expect(isEmpty([1])).to.be.false;
    expect(isEmpty({ a: 1 })).to.be.false;

    try {
      // @ts-ignore
      isEmpty(new Map());
    } catch (err) {
      expect(err instanceof Error).to.be.true;
    }

  });

});
