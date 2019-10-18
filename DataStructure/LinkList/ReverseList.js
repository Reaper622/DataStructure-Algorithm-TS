"use strict";
exports.__esModule = true;
/**
 * 反转链表
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function ReverseList(head) {
    var headNode = head;
    var preNode = null;
    var next = null;
    // 遍历所有的节点
    while (headNode) {
        // 暂存原来的next 用于遍历
        next = headNode.next;
        // 将节点的next指向反转
        headNode.next = preNode;
        preNode = headNode;
        headNode = next;
    }
    return preNode;
}
exports.ReverseList = ReverseList;
/**
 * 反转从位置 m 到 n 的链表
 * @param {ListNode} head
 * @param {number} m 反转开始位置
 * @param {number} n 反转结束位置
 */
function ReverseBetween(head, m, n) {
    if (!head || head.next == null) {
        return head;
    }
    var current = head;
    var prev = null;
    // 首先向后遍历使 current 为要反转的首个节点
    while (m > 1) {
        prev = current;
        current = current.next;
        m--;
        n--;
    }
    // 保存要反转节点的前一个节点
    var prevTail = prev;
    // 保存第 m 个节点，即反转后的尾节点
    var theTail = current;
    // 保存next节点用于遍历
    var theNext = null;
    while (n > 0) {
        theNext = current.next;
        current.next = prev;
        prev = current;
        current = theNext;
        n--;
    }
    // 如果从首个节点开始反转
    if (prevTail === null) {
        head = prev;
    }
    // 否则反转前一个节点连接反转后的头节点
    else {
        prevTail.next = prev;
    }
    // 连接反转尾节点与原链表后序节点
    theTail.next = current;
    return head;
}
exports.ReverseBetween = ReverseBetween;
