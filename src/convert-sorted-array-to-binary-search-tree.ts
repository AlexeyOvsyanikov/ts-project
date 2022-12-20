/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-use-before-define */
/*
    Given an integer array nums where the elements are sorted in ascending order,
    convert it to a height-balanced binary search tree.
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

// function sortedArrayToBST(nums: number[]): TreeNode | null {
//   if (!nums.length) {
//     return null;
//   }

//   const middleIndex = Math.floor(nums.length / 2);
//   const middle = nums[middleIndex];
//   const node = new TreeNode(middle);

//   node.left = sortedArrayToBST(nums.slice(0, middleIndex));
//   node.right = sortedArrayToBST(nums.slice(middleIndex + 1));

//   return node;
// }

// const nums = [-10, -3, 0, 5, 9];
// const nums2 = [1, 3];

// const list = sortedArrayToBST(nums);
// const list2 = sortedArrayToBST(nums2);

// console.log(list);
// console.log(list2);
