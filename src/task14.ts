/* eslint-disable no-plusplus */
/*
    дан отсортированный массив и число
    вернуть массив из двух чисел ,сумма которых равна второму параметру,
    если это не возможно - вернуть пустой массив
*/

function getArrayOfSum(source: number[], key: number): number[] {
  for (
    let leftIndex = 0, rightIndex = source.length - 1;
    leftIndex !== rightIndex;
    leftIndex++, rightIndex--
  ) {
    if (source[leftIndex] + source[rightIndex] === key) {
      return [source[leftIndex], source[rightIndex]];
    }
  }

  return [];
}

const source1 = [1, 2, 3, 4, 5, 6, 7];
const source2 = [1, 2, 3, 4, 5, 15, 25];
const k1 = 12;
const k2 = 8;

const pair = getArrayOfSum(source1, k1);
const pair2 = getArrayOfSum(source2, k2);

console.log('pair: ', pair); // []
console.log('pair2: ', pair2); // [3,5]
