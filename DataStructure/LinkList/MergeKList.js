"use strict";
exports.__esModule = true;
/**
 * 合并 k 个排序链表，返回合并后的排序链表。
 * @param {ListNode} lists
 * @return {ListNode}
 */
function MergeKList(lists) {
    var len = lists.length;
    if (len < 3) {
        return merge(lists[0] || null, lists[1] || null);
    }
    else {
        // 取中位数，向右移动一位，类似于 Math.floor(len / 2);
        var mid = len >> 1;
        return merge(MergeKList(lists.slice(0, mid + 1)), MergeKList(lists.slice(mid + 1)));
    }
}
exports.MergeKList = MergeKList;
/**
 * 合并两个有序链表
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function merge(list1, list2) {
    if (list1 === null || list2 === null) {
        return list1 ? list1 : list2;
    }
    var root = null;
    var pointer = null;
    if (list1.val <= list2.val) {
        pointer = list1;
        list1 = list1.next;
    }
    else {
        pointer = list2;
        list2 = list2.next;
    }
    root = pointer;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            pointer.next = list1;
            list1 = list1.next;
        }
        else {
            pointer.next = list2;
            list2 = list2.next;
        }
        pointer = pointer.next;
    }
    if (list1 !== null) {
        pointer.next = list1;
    }
    else {
        pointer.next = list2;
    }
    return root;
}
