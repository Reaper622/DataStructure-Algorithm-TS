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
exports["default"] = ReverseList;
