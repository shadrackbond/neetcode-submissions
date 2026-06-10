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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {

        // 
        // 1 -> 4 -> 1 -> 3
        // 1 -> 4 -> 1 -> 3

        // Start at head
        // Check if the value is equals to the value to be removed
        // If it is we simply set it equals to current.next
        // repeat the process till we get to the end of the list


        // declare dummy -> allow you to remove nodes at the begining
        // set the next of the dummy to the head -> dummy -> 2 -> 1 -> 4 -> 1
        // iterate over the linked list 
        // compare if the current val is equal to the value to be removed 
        // If it is we simply set it equals to current.next
        // else we simply current = current.next
        // return dummy.next

        let dummy = new ListNode(0); 
        dummy.next = head; // 0 -> null
        let current = dummy; // 0

        let prev = head;
        while(current){
            if(current.val === val){
                prev.next = current.next;
            }else{
                prev = current;
            }
            
            current = current.next;
        }

        return dummy.next;

        // while(current){
        //     while(current.next && current.next.val == val){
        //         current.next = current.next.next;
        //     }
        //     current = current.next;
        // }
        // // 0 -> null
        // return dummy.next;

        // Time complexity -> O(n)
        // Space complexity -> O(1)
        
        // Cracking the coding interview 
        // Linked Lists -> HashMaps -> LinkedList
        // Objects {name: "John"}



    }
}
