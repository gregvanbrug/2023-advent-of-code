import { expect } from 'chai';
import { benchmark } from 'kelonio';

import { getCalibration } from './day-01-02';

describe('Day 01 - Part 2', () => {
  let arr: Array<string>;

  it('should get a total by creating a two digit number from the first and last digit or string digit of an array of strings', () => {
    arr = ['two1nine', 'eightwothree', 'abcone2threexyz', 'xtwone3four', '4nineeightseven2', 'zoneight234', '7pqrstsixteen'];

    const expected = 281;
    const actual = getCalibration(arr);

    expect(actual).to.equal(expected);
  });

  afterEach(async () => {
    await benchmark.record(() => getCalibration(arr), {
      iterations: 10
    });
  });
});
