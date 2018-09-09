'use strict';

import { expect } from 'chai';

import map from './map-recursive';

it('map should be a function', () => {
    expect(map).to.be.a( 'function' );
});

it('map([1, 2], (item) => item) should return [1, 2]', () => {
    expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2])
});

it('map([3, 4], item => item) should be return [3, 4] ', () => {
    expect(map([3, 4], item => item)).to.be.deep.equal([3, 4]);
});

it('map([1, 2], item => item + 1) should be return [2, 4] ', () => {
    expect(map([1, 3], item => item + 1)).to.be.deep.equal([2, 4]);
});

it('map([3, 5], item => item + 1) should be return [4, 6] ', () => {
    expect(map([3, 5], item => item + 1)).to.be.deep.equal([4, 6]);
});

it('map([1, 2], (item, index) => index) should be return [0, 1]', () => {
    expect(map([1, 2], (item, index) => index)).to.be.deep.equal([0, 1]);
});

it('map([1, 2], (item, index, array) => array) should be return [[1, 2], [1, 2]]', () => {
    expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]]);
});

it('map([1, 2]) should be return [1, 2]', () => {
    expect(map([1, 2])).to.be.deep.equal([1, 2]);
});

it('map() should be return []', () => {
    expect(map()).to.be.deep.equal([]);
});
