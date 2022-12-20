/* eslint-disable no-plusplus */
/*
    Given a rectangular map, given a two-dimensional array of 0 and 1. 1 - land,
    0 - water. Outside the array, there is water everywhere. You need to count the number of islands.
    Neighboring cells with 1 belong to the same island, if they are strictly above or to the side of each other,
    if they touch at the corners, then these are different islands.
*/

const sourceMap = [
  [0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 0],
];

function getNumberOfIslands(map: number[][]): number {
  let amount = 0;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) {
        if (
          (i === 0 || map[i - 1][j] === 0) &&
          (j === 0 || map[i][j - 1] === 0)
        ) {
          amount++;
        }
      }
    }
  }

  return amount;
}

console.log('islands: ', getNumberOfIslands(sourceMap));
