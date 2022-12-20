const nums: { [key: string]: number } = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

export function numberToString(value: number): string {
  let output = '';
  let buffer = value;

  while (buffer) {
    output = (buffer % 10) + output;
    buffer = Math.floor(buffer / 10);
  }

  return output;
}

export function stringToNumber(value: string): number {
  let result = 0;
  const { length } = value;

  for (let index = 0; index < length; index += 1) {
    const key = value[index];
    const element = nums[key];

    if (!element) continue;

    const v = length - index - 1;
    const p = 10 ** v;

    result += element * p;
  }

  return value[0] === '-' ? -result : result;
}
