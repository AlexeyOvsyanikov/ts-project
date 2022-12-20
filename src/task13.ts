/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
// task: https://leetcode.com/problems/trapping-rain-water/

function trap(height: number[]): number {
  let acc = 0;

  for (let index = 0; index < height.length; index++) {
    const element = height[index];

    if (element === 0) {
      continue;
    }

    const intervalStartedIndex = index;
    let max = element;
    let intervalEndedIndex = -1;

    for (let j = index + 1; j < height.length; j++) {
      const current = height[j];
      const next = height[j + 1];

      if (current >= max) {
        max = current;
        intervalEndedIndex = j;

        if (next < current) {
          index = j - 1;
          break;
        }
      }
    }

    if (intervalEndedIndex !== -1) {
      for (let i = intervalStartedIndex + 1; i < intervalEndedIndex; i++) {
        const current = height[i];
        acc += Math.abs(element - current);
      }
    }

    if (intervalEndedIndex === height.length - 1) {
      break;
    }
  }

  return acc;
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const height2 = [4, 2, 0, 3, 2, 5];

const t1 = trap(height);

console.log('trap 1: ', t1);

const t2 = trap(height2);
console.log('trap 2: ', t2);

const t3 = trap([0, 1, 0, 1, 0]);
console.log('trap 3: ', t3);

const t4 = trap([0, 0, 7, 6, 5, 5, 6, 5]);
console.log('trap 4: ', t4);

const t5 = trap([0, 1, 8, 7, 6, 6, 7, 8, 7, 6, 8]);
console.log('trap 5: ', t5);

const t6 = trap([0, 1, 8, 7, 6, 6, 7, 8, 8, 8, 8]);
console.log('trap 6: ', t6);
