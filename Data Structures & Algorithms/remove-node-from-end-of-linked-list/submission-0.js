/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        /* 
        [1,2,3,4] --> n = 2
        [3]

removing a node from a linked list is not just pick and remove it is ensuring the previous node points to the next node from the one being removed.

        prev.next = prev.next.next


        
        */
    }
}
