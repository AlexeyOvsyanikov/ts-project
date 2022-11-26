/* eslint-disable no-plusplus */
/*
Вам даны несколько монет номиналом от 1 до 9 (монеты могут повторяться).
Ваша функция должна вернуть минимальную положительную целую сумму, которую нельзя заплатить этими монетами без сдачи.

Если например у нас есть 2 монеты номиналом 3, 5. Функция должна вернуть 1, т.к.
если заплатим монетой 3 то сдача будет - 2, если 5 то сдача будет 4. Без сдачи нельзя.

Если например у нас есть 3 монеты с номиналом 1, 2, 3. Функция должна вернуть 7, т.к. все числа,
что меньше можно оплатить этими монетами без сдачи.

Входные данные:
Массив coins[N] — N монет (0 < N ≤ 10) номиналом от 1 до 9.

Выходные данные:
Функция должна вернуть число X — минимальная сумма, для которой требуется сдача.

int getSum(int coins[]);

*/

function getSum(coins: number[]): number {
  /**
   * [3,5] {8} => 1
   *  3 - 1 = 2
   *  5 - 1 = 4
   *
   *  3 - 2 = 1
   *  5 - 2 = 3
   *
   * [1,2,3] {6} => 7
   *
   *
   */

  //   for (let i = 1; i <= coins[coins.length - 1]; i++) {
  //   }

  //   const last = coins[coins.length - 1];
  //   const first = coins[0];

  //   for (let i = last; i >= first; i--) {}

  const sum = coins.reduce((acc, current, index) => {
    return acc + current;
  });

  for (let i = 1; i <= 9; i++) {
    if(){}
  }

  return sum;
}

const sum1 = getSum([3, 5]);
const sum2 = getSum([1, 2, 3]);

console.log('sum1: ', sum1);
console.log('sum2: ', sum2);