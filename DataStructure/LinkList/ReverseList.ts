import {ListNode} from './LinkList'


/**
 * 反转链表
 * 
 * @param {ListNode} head 
 * @return {ListNode}
 */
function ReverseList (head: ListNode): ListNode {
    let headNode = head
    let preNode = null
    let next = null
    // 遍历所有的节点
    while(headNode) {
        // 暂存原来的next 用于遍历
        next = headNode.next
        // 将节点的next指向反转
        headNode.next = preNode
        preNode = headNode
        headNode = next
    }

    return preNode
}

export default ReverseList