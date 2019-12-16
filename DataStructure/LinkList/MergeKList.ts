import {ListNode} from '../LinkList/LinkList'

/**
 * 合并 k 个排序链表，返回合并后的排序链表。
 * @param {ListNode} lists 
 * @return {ListNode}
 */
function MergeKList(lists: ListNode[]): ListNode {
    let len = lists.length;
    if (len < 3) {
        return merge(lists[0] || null, lists[1] || null);
    } else {
        // 取中位数，向右移动一位，类似于 Math.floor(len / 2);
        let mid = len >> 1;
        return merge(MergeKList(lists.slice(0, mid + 1)), MergeKList(lists.slice(mid + 1)));
    }
}

/**
 * 合并两个有序链表
 * @param {ListNode} list1 
 * @param {ListNode} list2 
 * @return {ListNode}
 */
function merge(list1: ListNode | null ,list2: ListNode | null): ListNode {
    if (list1 === null || list2 === null) {
        return list1 ? list1 : list2;
    }
    let root = null;
    let pointer = null;
    // 选取较小作为头节点
    if (list1.val <= list2.val) {
        pointer = list1;
        list1 = list1.next;
    } else {
        pointer = list2;
        list2 = list2.next;
    }
    root = pointer;
    // 当两个链表都不为null时，循环向后遍历
    while(list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            pointer.next = list1;
            list1 = list1.next;
        } else {
            pointer.next = list2;
            list2 = list2.next;
        }
        pointer = pointer.next;
    }
    if (list1 !== null) {
        pointer.next = list1;
    } else {
        pointer.next = list2;
    }
    return root;
}

export {MergeKList}