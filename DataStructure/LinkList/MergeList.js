"use strict";
exports.__esModule = true;
var LinkList_1 = require("./LinkList");
/**
 *
 * @param {ListNode} pHead
 * @param {ListNode} qHead
 * @return {List}
 */
function MergeList(pHead, qHead) {
    var list = new LinkList_1.List();
    if (!pHead) {
        list.head = qHead;
        return list;
    }
    else if (!qHead) {
        list.head = pHead;
        return list;
    }
    var node = list.head;
    // 当两个链表均为完全合并时
    while (pHead && qHead) {
        if (pHead.val < qHead.val) {
            node.next = pHead;
            pHead = pHead.next;
        }
        else {
            node.next = qHead;
            qHead = qHead.next;
        }
        node = node.next;
    }
    // 链接未完全合并链表的后序节点
    if (!pHead) {
        node.next = qHead;
    }
    else {
        node.next = pHead;
    }
    list.head = list.head.next;
    return list;
}
exports["default"] = MergeList;
