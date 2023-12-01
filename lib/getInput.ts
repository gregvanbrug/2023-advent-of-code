import { readFileSync } from 'fs';

function getInput(file: string): Array<string> {
  return readFileSync(file, { encoding: 'utf-8' })
    .trim()
    .split('\n');
}

export default getInput;