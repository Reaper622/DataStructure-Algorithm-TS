import {ListNode} from './LinkList'
/**
 * 寻找链表的中点，如果是偶数链表返回中间节点中的后一个中间节点。
 * @param {ListNode} head 
 * @return {ListNode}
 */
function LinkListMiddle (head: ListNode): ListNode {
    if (head === null) {
        return null
    }
    // 定义一个快指针 一次走2个
    let fast = head
    // 定义一个慢指针 一次走一个
    let slow = head
    // 快指针慢指针同时出发 当快指针到达末尾时慢指针指向的正是中点
    while (fast) {
        // 如果已经为末尾元素 直接跳出循环
        if (!fast.next) {
            break
        }
        slow = slow.next
        fast = fast.next.next
    }
    // 判断奇偶 选择是否输出第二个节点
    return slow
}

export {LinkListMiddle}