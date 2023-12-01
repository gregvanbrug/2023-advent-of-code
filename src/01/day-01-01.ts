// https://adventofcode.com/2023/day/1

import { join } from 'path';
import getInput from 'lib/getInput';

const file = join(__dirname, 'input.txt');

let input: Array<string>;

try {
  input = getInput(file);
  const trebuchet = getCalibration(input);
  console.log('Day 01 - 01', trebuchet);
} catch (error) {
  console.error(error);
}

function getCalibration(input: Array<string>): number {
  let total = 0;
  for (const item of input) {

    const numbers = item.match(/\d/g);
    const value = `${numbers[0]}${numbers[numbers.length - 1]}`;

    total += +value;
  }
  return total;
}


export { getCalibration };
