import { expect } from 'chai';
import { benchmark } from 'kelonio';

import { getCalibration } from './day-01-01';

describe('Day 01 - Part 1', () => {
  let arr: Array<string>;

  it('should get a total by creating a two digit number from the first and last digit of an array of strings', () => {
    arr = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];

    const expected = 142;
    const actual = getCalibration(arr);

    expect(actual).to.equal(expected);
  });

  afterEach(async () => {
    await benchmark.record(() => getCalibration(arr), {
      iterations: 10
    });
  });
});
