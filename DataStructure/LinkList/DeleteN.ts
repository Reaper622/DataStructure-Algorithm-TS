import {ListNode} from './LinkList'

/**
 * 删除链表的倒数第N个节点
 * 
 * @param {ListNode} head 
 * @param {number} n 
 * @return {ListNode}
 */
function DeleteNFromEnd (head: ListNode, n: number) :ListNode {
    if (!head || n <= 0) {
        return null
    }
    // 创建一个临时头指针 解决要删除头指针的问题
    let node = new ListNode(0, null)
    node.next = head
    // 利用双指针法，首先领 a b 节点都指向头节点
    let a: ListNode = node
    let b: ListNode = node
    let c: ListNode = null
    // a提前移动 n 个节点
    for(let i = 0; i < n; i++) {
        a = a.next
        // 如果链表长度不超过 n
        if (!a) {
            return null
        }
    }
    // 向后遍历直到a到达尾部，此时b就为要删除的节点，c始终为b的前一个节点
    while(a) {
        c = b
        b = b.next
        a = a.next
    }
    // 删除b节点
    c.next = c.next.next

    return node.next
}

export default DeleteNFromEnd