/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true;

    const leftStack = [[root.left, 1]];
    const rightStack = [[root.right, 1]];

    let leftDepth = 0;
    let rightDepth = 0;

    while (leftStack.length) {
        const [node, depth] = leftStack.pop();

        if (node) {
            leftDepth = Math.max(leftDepth, depth);

            leftStack.push([node.left, depth + 1]);
            leftStack.push([node.right, depth + 1]);
        }
    }

    while (rightStack.length) {
        const [node, depth] = rightStack.pop();

        if (node) {
            rightDepth = Math.max(rightDepth, depth);

            rightStack.push([node.left, depth + 1]);
            rightStack.push([node.right, depth + 1]);
        }
    }

    return Math.abs(leftDepth - rightDepth) <= 1;
    }
}
