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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let res = 0;

        const dfs = (node) => {
            if (!node) return -1;

            const left = dfs(node.left);
            const right = dfs(node.right);

            // update diameter
            res = Math.max(res, 2 + left + right);

            // return height
            return 1 + Math.max(left, right);
        };

        dfs(root);
        return res;
    }
}