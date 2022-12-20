/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/**
 * Definition for singly-linked list.
  class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

    Input: lists = [[1,4,5],[1,3,4],[2,6]]
    Output: [1,1,2,3,4,4,5,6]
    Explanation: The linked-lists are:
    [
        1->4->5,
        1->3->4,
        2->6
    ]
    merging them into one sorted list:
    1->1->2->3->4->4->5->6

    Should run in: O(N*K*Log(K))
    N - lengths of the longest array,
    K - amount of arrays.
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let mergedList: ListNode | null = null;

  for (let i = 0; i < lists.length - 1; i++) {
    if (!mergedList) {
      mergedList = sort(lists[i], lists[i + 1]);
    } else {
      mergedList = sort(mergedList, lists[i + 1]);
    }
  }

  return mergedList;
}

function sort(left: ListNode | null, right: ListNode | null): ListNode | null {
  let result: ListNode | null = null;
  let temp: ListNode | null = null;
  let leftTemp = left;
  let rightTemp = right;

  while (leftTemp && rightTemp) {
    const newNode = new ListNode();

    if (leftTemp.val < rightTemp.val) {
      newNode.val = leftTemp.val;
      leftTemp = leftTemp.next;
    } else if (rightTemp.val < leftTemp.val) {
      newNode.val = rightTemp.val;
      rightTemp = rightTemp.next;
    } else {
      newNode.val = rightTemp.val;
      newNode.next = new ListNode(rightTemp.val);
      leftTemp = leftTemp.next;
      rightTemp = rightTemp.next;
    }

    if (!temp) {
      temp = newNode;
      result = newNode;
    } else {
      temp.next = newNode;
      temp = newNode;
    }

    if (newNode.next) {
      temp = newNode.next;
    }
  }

  let latest = leftTemp ?? rightTemp;

  if (!temp || !latest) {
    return result;
  }

  while (latest) {
    temp.next = latest;
    temp = latest;
    latest = latest.next;
  }

  return result;
}

function print(root: ListNode | null): string {
  if (!root) {
    return '';
  }

  let buffer = '';

  while (root) {
    buffer += `${root.val}`;

    if (root.next) {
      buffer += ' -> ';
    }

    root = root.next;
  }

  return buffer;
}

const arr = [
  new ListNode(1, new ListNode(4, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
  new ListNode(2, new ListNode(6)),
];

// const sortered = sort(arr[0], arr[1]);
// const sortered2 = sort(arr[1], arr[2]);
// const sortered3 = sort(arr[0], arr[2]);

const r = mergeKLists(arr);

const formattedList = print(r);

console.log('r: ', r);
console.log('formattedList: ', formattedList);
// console.log('sortered: ', sortered);
// console.log('sortered2: ', sortered2);
// console.log('sortered3: ', sortered3);
