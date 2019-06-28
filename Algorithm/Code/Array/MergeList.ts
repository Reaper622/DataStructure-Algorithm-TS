class ListNode {
  val:number
  next: ListNode
}


export default (l1: ListNode, l2:ListNode):ListNode => {
  if(l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  }
  let l3:ListNode = {val: 0, next: null};
  let l4:ListNode = {val: 0, next: null};
  l3.next = l4;
  while(l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      l4.val = l1.val;
      l1 = l1.next;
    } else {
      l4.val = l2.val;
      l2 = l2.next;
    }
    l4.next = {val: 0, next: null};
    l4 = l4.next;
  }
  if (l1 !== null) {
    l4.next = l1;
  } else {
    l4.next = l2;
  }
  l3 = l3.next;
  return l3;
}