"use strict";
exports.__esModule = true;
var LinkList_1 = require("./LinkList");
/**
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 *
 * @param {ListNode} head
 * @param {number} x
 */
function SeparateList(head, x) {
    // 使用双指针法
    var before_x = new LinkList_1.ListNode(0, null);
    var after_x = new LinkList_1.ListNode(0, null);
    var before_head = before_x;
    var after_head = after_x;
    // 遍历原链表，小于的放在 before 大于等于的放在 after
    while (head) {
        if (head.val < x) {
            before_x.next = head;
            before_x = before_x.next;
        }
        else {
            after_x.next = head;
            after_x = after_x.next;
        }
        head = head.next;
    }
    // 结束尾节点
    after_x.next = null;
    // 合并原链表
    before_x.next = after_head.next;
    return before_head.next;
}
exports["default"] = SeparateList;
