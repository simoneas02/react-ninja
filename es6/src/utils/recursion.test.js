'use strict';

import { expect } from 'chai';

import { sum } from './recursion';

it('sum should be a function', () => {
    expect(sum).to.be.a('function');
});

it('sum([1, 2]) should be return 3', () => {
    expect(sum([1, 2])).to.be.deep.equal(3);
});

it('sum([3, 6]) should be return 9', () => {
    expect(sum([3, 6])).to.be.deep.equal(9);
});

it('sum() should be return 0', () => {
    expect(sum()).to.be.deep.equal(0);
});
