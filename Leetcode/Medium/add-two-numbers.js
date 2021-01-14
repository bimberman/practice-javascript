/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

addTwoNumbers([2, 4, 3],[5, 6, 4])

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function addTwoNumbers (l1, l2) {
  let list = new ListNode(0);

  while(l1!==null || l2!==null || sum>0){
    sum*=10;
    if (l1) {
      sum += l1.pop() + l2.pop();
    } else {
      sum += l1.pop();
    }
  }

  while(l2.length){
    sum*=10;
    sum += l2.pop();
  }
  console.log(sum)
  return sum;
}
