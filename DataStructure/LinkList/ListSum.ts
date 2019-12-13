import { ListNode } from "./LinkList";

/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * @param {ListNode} pHead 
 * @param {ListNode} qHead
 * @return {ListNode} 
 */
function listSum(pHead: ListNode, qHead: ListNode): ListNode {
    // 定义一个新的链表
    let n = new ListNode(0, null);
    // 定义新链表的头指针
    let head = n;
    // 判断是否有进位的标志
    let plus = 0;
    while(pHead || qHead || plus) {
        let val1 = 0,
            val2 = 0;
        // 如果 pHead 上存在节点
        if (pHead) {
            val1 = pHead.val;
            pHead = pHead.next;
        }
        // 如果 qHead 上存在节点
        if (qHead) {
            val2 = qHead.val;
            qHead = qHead.next;
        }
        let sum = val1 + val2 + plus;
        // 链表上只存放小于10以内的数
        n.next = new ListNode(sum % 10, null);
        // 存储进位
        plus = Math.floor(sum / 10);
        n = n.next;
    }
    // 输出所需链表
    return head.next;
}

export {listSum}