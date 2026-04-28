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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null

        //swap
        const temporaryLeft = root.left
        root.left = root.right
        root.right = temporaryLeft

        //recursively invert subtrees
        this.invertTree(root.left);
        this.invertTree(root.right);
        
        return root;
        
    }
}
