/* eslint-disable no-use-before-define */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
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

// function isValidBST(
//   root: TreeNode | null,
//   low: TreeNode | null,
//   upper: TreeNode | null,
// ): boolean {
//   debugger;

//   if (!root) {
//     return true;
//   }

//   if ((low && root.val <= low.val) || (upper && root.val >= upper.val)) {
//     return false;
//   }

//   return (
//     isValidBST(root.left, low, root) && isValidBST(root.right, root, upper)
//   );
// }

// const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
// const tree2 = new TreeNode(
//   5,
//   new TreeNode(1),
//   new TreeNode(4, new TreeNode(3), new TreeNode(6)),
// );

// const correctTree1 = isValidBST(tree1, null, null);
// const correctTree2 = isValidBST(tree2, null, null);

// console.log('correctTree1: ', correctTree1);
// console.log('correctTree2: ', correctTree2);
