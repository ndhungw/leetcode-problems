/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let reminder = 0;
  let list = new ListNode(0);
  let head = list;

  while (p1 || p2) {
    const p1Val = p1?.val || 0;
    const p2Val = p2?.val || 0;
    const sum = p1Val + p2Val + reminder;
    reminder = Math.floor(sum / 10);
    head.next = new ListNode(sum % 10, null);
    head = head.next; // head = newNode;
    p1 = p1.next;
    p2 = p2.next;
  }

  if (reminder > 0) {
    const last = new ListNode(reminder);
    head.next = last;
  }

  return list.next;
};

const createList = (arr) => {
  let list = new ListNode(0);
  let pointer = list;

  for (let i = 0; i < arr.length; i++) {
    const newNode = new ListNode(arr[i]);
    pointer.next = newNode;
    pointer = pointer.next;
  }

  return list.next;
};

const printList = (listNode) => {
  let pointer = listNode;

  while (pointer) {
    console.log(` ${pointer.val}`);
    pointer = pointer.next;
  }
};

const l1 = createList([2, 4, 6]);
const l2 = createList([5, 6, 4]);
const l3 = addTwoNumbers(l1, l2);
printList(l3);
