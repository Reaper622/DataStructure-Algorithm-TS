"use strict";
exports.__esModule = true;
var LinkList_1 = require("./LinkList");
/**
 * 删除链表的倒数第N个节点
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function DeleteNFromEnd(head, n) {
    if (!head || n <= 0) {
        return null;
    }
    // 创建一个临时头指针 解决要删除头指针的问题
    var node = new LinkList_1.ListNode(0, null);
    node.next = head;
    // 利用双指针法，首先领 a b 节点都指向头节点
    var a = node;
    var b = node;
    var c = null;
    // a提前移动 n 个节点
    for (var i = 0; i < n; i++) {
        a = a.next;
        // 如果链表长度不超过 n
        if (!a) {
            return null;
        }
    }
    // 向后遍历直到a到达尾部，此时b就为要删除的节点，c始终为b的前一个节点
    while (a) {
        c = b;
        b = b.next;
        a = a.next;
    }
    // 删除b节点
    c.next = c.next.next;
    return node.next;
}
exports["default"] = DeleteNFromEnd;
