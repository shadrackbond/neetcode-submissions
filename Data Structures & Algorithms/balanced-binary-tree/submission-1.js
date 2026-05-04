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

    const stack = [[root, false]];
    const heights = new Map();

    while (stack.length) {
        const [node, visited] = stack.pop();

        if (!node) continue;

        if (visited) {
            const leftHeight = heights.get(node.left) || 0;
            const rightHeight = heights.get(node.right) || 0;

            if (Math.abs(leftHeight - rightHeight) > 1) {
                return false;
            }

            heights.set(node, 1 + Math.max(leftHeight, rightHeight));
        } else {
            // Post-order simulation
            stack.push([node, true]);
            stack.push([node.right, false]);
            stack.push([node.left, false]);
        }
    }

        return true;
    }
}
