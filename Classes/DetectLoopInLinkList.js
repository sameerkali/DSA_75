class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function hasCycle(head) {
    let slow = head;
    let fast = head;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        return true; 
      }
    }
  
    return false; 
  }

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node1;
node2.next = node2;
node3.next = node3;
node4.next = node4;

const hasCycleResult = hasCycle(node1);

console.log("Does the linked list have a cycle?", hasCycleResult);