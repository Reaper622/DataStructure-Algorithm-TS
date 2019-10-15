import {List, ListNode} from './LinkList'

/**
 * 合并两个有序链表
 * 
 * @param {ListNode} pHead 
 * @param {ListNode} qHead 
 * @return {List}
 */
function MergeList(pHead: ListNode, qHead: ListNode): List {
    let list = new List()
    if (!pHead) {
        list.head = qHead
        return list
    } else  if (!qHead) {
        list.head = pHead
        return list
    }
    let node = list.head
    // 当两个链表均为完全合并时
    while(pHead && qHead) {
        if (pHead.val < qHead.val) {
            node.next = pHead
            pHead = pHead.next
        } else {
            node.next = qHead
            qHead = qHead.next
        }

        node = node.next
    }
    // 链接未完全合并链表的后序节点
    if (!pHead) {
        node.next = qHead
    } else {
        node.next = pHead
    }
    list.head = list.head.next

    return list
    
}

export default MergeList
