/* eslint-disable no-use-before-define */
/*

There is a binary search tree with N numbers and a given number.
You need to find the first number in the tree that is strictly greater than this given number.
In this case, the given number itself may not be present in the tree. Should run in O(Log N).
Then, as a complication, they can ask to find K numbers that are greater than the given one.
Should run in O(Log(N) + K)
*/

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;

//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// const tree = new TreeNode(
//   5,
//   new TreeNode(2, new TreeNode(-1, new TreeNode(3))),
//   new TreeNode(7, new TreeNode(6), new TreeNode(8)),
// );

// function firstGreater(root: TreeNode | null, key: number): number | null {
//   if (!root) {
//     return null;
//   }

//   if (root.val > key) {
//     return root.val;
//   }

//   return firstGreater(root.left, key) || firstGreater(root.right, key);
// }

// /*
//             5
//         2       7
//      -1   3   6   8
// */

// const fg = firstGreater(tree, 6);
// console.log('tree', tree);
// console.log('fg', fg);
