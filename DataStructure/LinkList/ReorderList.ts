import {ListNode} from './LinkList'

/**
 * 重排链表
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 *  将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * @param {ListNode} head 
 * @return {ListNode}
 */
function ReorderList (head:ListNode) :ListNode {
    if (head === null || head.next === null) {
        return head
    }
    // 使用快慢指针找到中点
    let slow = head
    let fast = head
    while ( fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    // 从中点开始翻转链表
    let cur = slow.next // 翻转的开始
    let thePrev = null
    let theNext = null
    while(cur !== null) {
        theNext = cur.next
        cur.next = thePrev
        thePrev = cur
        cur = theNext
    }
    slow.next = thePrev
    // 拼接前半部分链表与后半部分翻转链表
    let head1 = head
    let head2 = slow.next
    while (head1 !== slow) {
        slow.next = head2.next
        head2.next = head1.next
        head1.next = head2
        head1 = head2.next
        head2 = slow.next
    }
    return head
}

export default ReorderList