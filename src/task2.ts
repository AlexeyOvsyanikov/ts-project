/* eslint-disable no-plusplus */
/*
    There is an array of int which may contain only 0, 1, 2.
    You should sort it the fastest possible way. It should run in O(N).
*/

function sort2(arr: number[], dictionary: number[] = [0, 1, 2]): void {
  const mapOfKeysWithAmounts = new Map<number, number>();

  dictionary.forEach((el) => {
    mapOfKeysWithAmounts.set(el, 0);
  });

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    const amount = mapOfKeysWithAmounts.get(el);

    if (amount !== undefined) {
      mapOfKeysWithAmounts.set(el, amount + 1);
    }
  }

  let i = 0;

  mapOfKeysWithAmounts.forEach((value, key) => {
    const buff = new Array(value).fill(key);

    arr.splice(i, value, ...buff);
    i += value;
  });
}
const a = [1, 1, 2, 0, 2, 0, 1, 1];

console.log('before: ', a);

sort2(a);

console.log('after: ', a);
