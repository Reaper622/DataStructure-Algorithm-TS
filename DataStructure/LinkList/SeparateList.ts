import {ListNode} from './LinkList'

/**
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 
 * @param {ListNode} head 
 * @param {number} x 
 */
function SeparateList (head: ListNode, x: number) {
    // 使用双指针法
    let before_x = new ListNode(0, null)
    let after_x = new ListNode(0, null)
    let before_head = before_x
    let after_head = after_x
    // 遍历原链表，小于的放在 before 大于等于的放在 after
    while(head) {
        if (head.val < x) {
            before_x.next = head
            before_x = before_x.next
        } else {
            after_x.next = head
            after_x = after_x.next
        }
        head = head.next
    }
    // 结束尾节点
    after_x.next = null
    // 合并原链表
    before_x.next = after_head.next
    return before_head.next
}


export default SeparateList