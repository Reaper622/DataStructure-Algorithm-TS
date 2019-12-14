import {ListNode} from './LinkList'

/**
 * 对链表进行排序。
 * @param {ListNode} head 
 * @return {ListNode}
 */
function sortList(head: ListNode): ListNode {
    if (head === null || head.next === null) {
        return head;
    }
    return cut(head);
};

/**
 * 分割链表，递归分割直到分到最小情况
 * @param {ListNode} head 
 * @return {ListNode}
 */
const cut = function (head: ListNode): ListNode {
    if (head === null || head.next === null) {
        return head;
    }
    // 使用快慢指针分割为两个片段
    let slow = head,
        fast = head;
    while (fast !== null) {
        fast = fast.next;
        fast = fast !== null ? fast.next : null;
        // 如果此时快指针不为空，向后移动慢指针
        if (fast !== null) {
          slow = slow.next;
        }
    }
    // 找到此链表的中间节点的下一个节=结点，当做第二段的头结点
    let half = slow.next;
    // 切断前后两个链表
    slow.next = null;
    // 递归分割，直到到最小情况
    let left = cut(head),
        right = cut(half);
    // 返回合并分割的两个的结果，此时已为排序后的结果
    return merge(left, right);
}

/**
 * 合并链表，在合并过程对链表进行排序。
 * @param {ListNode} left 
 * @param {ListNode} right 
 */
const merge = function (left: ListNode, right: ListNode): ListNode {
    let result = null;
    let root = result;
    while (left !== null || right !== null) {
        // 如果左边已经遍历完，直接连接右边，反之则直接连接左边
        if (left === null) {
            root.next = right;
            break;
        } else if (right === null) {
            root.next = left;
            break;
        }
        let temp = null;
        // 选取较小值添加到链表上
        if (left.val > right.val) {
            temp = right;
            right = right.next;
        } else {
            temp = left;
            left = left.next;
        }
        // 如果结果链表为空，首先确定头节点
        if (result === null) {
            result = temp;
            root = result;
        } else {
            root.next = temp;
            root = root.next;
        }
    }
    return result;
}

export {sortList}