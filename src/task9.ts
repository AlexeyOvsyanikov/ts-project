/*
    Given an array of numbers and a given number. You need to find all pairs of numbers in
    the array, the sum of which is equal to the given one.
    Should run in O(N), where N is the size of the array.
*/

function getPairs(src: number[], key: number): number[][] {
  const map = new Map<number, number>();
  const result: number[][] = [];

  src.forEach((el) => {
    const diff = key - el;

    if (diff >= 0) {
      if (map.get(diff)) {
        map.delete(diff);
      } else {
        map.set(diff, el);
        result.push([diff, el]);
      }
    }
  });

  return result;
}

const input = [2, 5, 2, 6, 1, 4];
const k = 6;

console.log(input, k);
const r1 = getPairs(input, k);

console.log(r1);
