import { describe, it } from 'bun:test';
import { expect } from 'chai';
import { isEmpty } from './utils.js';


describe('🌭 Utils', () => {

  it('- should be able to check whether is empty or not for a variety of types', () => {

    expect(isEmpty(null)).to.be.true;
    expect(isEmpty(undefined)).to.be.true;
    expect(isEmpty('')).to.be.true;
    expect(isEmpty([])).to.be.true;
    expect(isEmpty({})).to.be.true;

    expect(isEmpty('a')).to.be.false;
    expect(isEmpty([1])).to.be.false;
    expect(isEmpty({ a: 1 })).to.be.false;

    expect(isEmpty(new Map())).to.be.true;
    expect(isEmpty(new Set())).to.be.true;

    const m = new Map();
    m.set('a', 1);
    expect(isEmpty(m)).to.be.false;
    expect(isEmpty(new Set([1,2,3]))).to.be.false;

    try {
      isEmpty(new WeakSet());
    } catch (err) {
      expect(err instanceof Error).to.be.true;
    }


    try {
      isEmpty(new WeakMap());
    } catch (err) {
      expect(err instanceof Error).to.be.true;
    }
  });

});
