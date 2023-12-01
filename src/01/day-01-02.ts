// https://adventofcode.com/2023/day/1

import { join } from 'path';
import getInput from 'lib/getInput';

const file = join(__dirname, 'input.txt');

let input: Array<string>;

try {
  input = getInput(file);
  const trebuchet = getCalibration(input);
  console.log('Day 01 - 02', trebuchet);
} catch (error) {
  console.error(error);
}

function getCalibration(input: Array<string>): number {
  let total = 0;
  for (const item of input) {

    const numbers:string[] = item.match(/\d|(oneight|twone|threeight|eightwo|eighthree|nineight|one|two|three|four|five|six|seven|eight|nine)/g);
    const normalized = normalize(numbers);

    const value = `${normalized[0]}${normalized[normalized.length - 1]}`;

    total += +value;
  }
  return total;
}

function normalize(arr: string[]):string[] {
  const normalized = arr.map((item: string) => getNumber(item));
  return normalized.flat();
}

function getNumber(string: string) {
  const map: {[index: string]:any} = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
    'oneight': ['1', '8'],
    'twone': ['2', '1'],
    'threeight': ['3','8'],
    'eightwo': ['8', '2'],
    'eighthree': ['8','3'],
    'nineight': ['9', '8'],
  };

  return map[string] ? map[string] : string;
}

export { getCalibration };
