"use strict";
exports.__esModule = true;
/**
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function RotateRight(head, k) {
    // 判断链表是否为空或只有一个节点
    if (head === null || head.next === null) {
        return head;
    }
    // 定义n为链表长度
    var n;
    // 定义一个节点用来遍历链表
    var old_tail = head;
    // 首先获取链表内节点个数
    for (n = 1; old_tail.next !== null; n++) {
        old_tail = old_tail.next;
    }
    // 形成闭环
    old_tail.next = head;
    // 新的尾节点为 (n - k % n - 1) 个节点
    // 新的头节点为 (n - k % n) 个节点
    // 定义新的尾节点
    var new_tail = head;
    for (var i = 0; i < (n - k % n - 1); i++) {
        new_tail = new_tail.next;
    }
    // 定义新的头节点
    var new_head = new_tail.next;
    // 断开新的尾节点与后面的连接
    new_tail.next = null;
    return new_head;
}
exports["default"] = RotateRight;
