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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        //compare the first two heads and then from them write one as the new head
        //output --> dummy -->1-->then compare items from list one and two which is smaller than the other
        let dummy = new ListNode()
        let tail = dummy
        
        while(list1&&list2){
            if(list1.val < list2.val){
                tail.next = list1;
                list1 = list1.next;
            }
            else{
                tail.next = list2;
                list2 = list2.next;
            }

            tail = tail.next;
        }

        //attaching the remaining noded
        if(list1){
            tail.next = list1;
        }
        else if (list2){
            tail.next = list2;
        }

        return dummy.next;
    }
}
