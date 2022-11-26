/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
export function correctBrackets(brackets: string): boolean {
  // 1) )()()())()() : false, start with closed
  // 2) ((((())))))  : opened and closed amounts are not equal
  // 3) (())(())(    : incorrect order *

  // 1
  if (brackets[0] === ')') {
    return false;
  }

  // 2
  let amountOfOpened = 0;
  let amountOfClosed = 0;

  for (const symbol of brackets) {
    if (symbol === ')') {
      amountOfClosed++;
    } else if (symbol === '(') {
      amountOfOpened++;
    }
  }

  if (amountOfOpened !== amountOfClosed) {
    return false;
  }

  let opened = false;

  for (let index = 0; index < brackets.length; index++) {
    const element = brackets[index];

    if (element === '(' && index < brackets.length - 1) {
      opened = true;
    } else if (element === ')' && !opened) {
      return false;
    }
  }

  return opened;
}
