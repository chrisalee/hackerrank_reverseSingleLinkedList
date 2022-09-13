/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

const reverse = (llist) => {
    let head = null;
    let next = null;
    
    while(llist) {
      head = new SinglyLinkedListNode(llist.data);
      head.next = next;
      next = head;
      llist = llist.next;
    }
    
    return head;
}
