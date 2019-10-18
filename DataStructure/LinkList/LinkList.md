# 链表

> 链表是用一组任意存储的单元来存储线性表的数据元素。一个对象存储着本身的值和下一个元素的地址。

- 查询元素需要遍历到指定元素，查询慢
- 插入元素只需要断开链接重新赋值，插入快

类似于 React 16 的 Fiber Node 连接而成的 Fiber Tree ，就是个单链表结构。



### 链表的数据结构

> 此部分代码在 LinkList.ts 中

首先我们定义链表内节点的数据结构

```typescript
class ListNode {
    val: any
    next: ListNode

    /**
     * 
     * @param {*} val 
     * @param {ListNode} next 
     */
    constructor (val: any, next: ListNode) {
        this.val = val
        this.next = next
    }
}
```



之后我们定义链表的数据结构和一些基础操作（查询，插入，删除）

```typescript
class List  {
    head: ListNode
    constructor(arr ? : any[]) {
        if (arr) {
            this.head = new ListNode(arr[0], null)
            let current = this.head
            for(let i = 1; i < arr.length; i++) {
                current.next = new ListNode(arr[i], null)
                current = current.next
            }
        } else {
            this.head = new ListNode(null, null)
        }
        
    }

    /**
     * 从 0 开始计算，找到包括head 头节点 在哪的位于 index 位置的节点
     * @param { Number } index
     * @return {ListNode}
     */
    public find(index: number): ListNode {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    /**
     * 在指定位置插入节点
     * 
     * @param {any} value 
     * @param {number} index 
     */
    public insert(value: any, index: number): void {
        // 获取当前位置前一个节点
        let prev = this.find(index-1)
        let next = new ListNode(value, prev.next)
        prev.next = next
    }
    /**
     *  删除指定位置的节点
     * 
     * @param {number} index 
     */
    public delete(index: number): void {
        // 如果要删除头节点
        if (index === 0) {
            this.head = this.head.next
        } else if (this.find(index) === null || this.find(index).val === null) {
            throw Error('输入节点不存在')
        } else {
            // 获取要删除节点的前一个节点
            let prev = this.find(index-1)
            prev.next = prev.next.next
        }
    }

}
```

### 链表去重

> 此部分代码在 List 类中

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

```typescript
/**
     * 删除重复元素
     */
    public DeleteDuplicates(): void {
        let current = this.head
        // 暂存值前一个节点的值
        let temp: any
        // 要删除节点的
        let toDelete: ListNode

        while(current && current.next !== null) {
            temp = current.val
            // 如果重复, 删除重复节点
            if (current.next.val === temp) {
                toDelete = current.next
                current.next = toDelete.next
            } else {
                current = current.next
                temp = current.val
            }
        }
    }
```





### 正向遍历与反向遍历

> 此部分代码在 List 类中

```typescript
 /**
     * 正序遍历链表,返回一个数组
     * 
     * @return {any[]}
     * 
     */
    public PositiveTraverse(): any[] {
        let arr = []
        let current = this.head
        while (current !== null) {
            arr.push(current.val)
            current = current.next
        }
        return arr
    }

    /**
     * 逆序遍历链表，返回一个数组
     * 
     * @return {any[]}
     */
    public NegativeTraverse(): any[] {
        let arr = []
        let current = this.head;
        while (current !== null) {
            arr.unshift(current.val)
            current = current.next
        }
        return arr
    }
```

### 反转链表

> 此部分代码在 ReverseList.ts 中

将链表进行翻转，尾节点变为新的头节点，输入一个链表的头节点，返回反转后的新的头节点

```typescript
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
```

### 反转链表 II

> 此部分代码在 ReverseList.ts 中

反转从位置 *m* 到 *n* 的链表。

```typescript
/**
 * 反转从位置 m 到 n 的链表
 * @param {ListNode} head
 * @param {number} m 反转开始位置
 * @param {number} n 反转结束位置
 * @return {ListNode}
 */

 function ReverseBetween (head: ListNode, m: number, n: number): ListNode {
    if (!head || head.next == null) {
        return head
    }
    let current = head
    let prev = null
    // 首先向后遍历使 current 为要反转的首个节点
    while ( m > 1) {
        prev = current
        current = current.next
        m--
        n--
    }
    // 保存要反转节点的前一个节点
    let prevTail = prev
    // 保存第 m 个节点，即反转后的尾节点
    let theTail = current
    // 保存next节点用于遍历
    let theNext = null
    while (n > 0) {
        theNext = current.next
        current.next = prev
        prev = current
        current = theNext
        n--
    }
    // 如果从首个节点开始反转
    if (prevTail === null) {
        head = prev
    } 
    // 否则反转前一个节点连接反转后的头节点
    else {
        prevTail.next = prev
    }
    // 连接反转尾节点与原链表后序节点
    theTail.next = current
    
    return head

 }
```



### 合并链表

> 此部分代码在 MergeList.ts 中

传入两个有序链表的头节点，返回一个合并两个链表的有序链表



```typescript
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
```

### 删除链表的倒数第N个节点

> 这部分代码在 DeleteN.ts 中

给定一个链表，删除链表的倒数第 *n* 个节点，并且返回链表的头结点。

```typescript
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

```



### 旋转链表指定的长度

> 此部分代码在 RotateRight.ts 中

给定一个链表，让每个节点向右移动k个位置。

例如:

```
输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
```

```
输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL
```

```typescript
/**
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * 
 * @param {ListNode} head 
 * @param {number} k 
 * @return {ListNode}
 */
function RotateRight (head: ListNode, k: number):ListNode {
    // 判断链表是否为空或只有一个节点
    if (head === null || head.next === null) {
        return head
    }
    // 定义n为链表长度
    let n : number
    // 定义一个节点用来遍历链表
    let old_tail = head
    // 首先获取链表内节点个数
    for(n = 1; old_tail.next !== null; n++) {
        old_tail = old_tail.next
    }
    // 形成闭环
    old_tail.next = head

    // 新的尾节点为 (n - k % n - 1) 个节点
    // 新的头节点为 (n - k % n) 个节点
    // 定义新的尾节点
    let new_tail = head
    for(let i = 0; i < (n - k % n - 1); i++) {
        new_tail = new_tail.next
    }
    // 定义新的头节点
    let new_head = new_tail.next;
    // 断开新的尾节点与后面的连接
    new_tail.next = null

    return new_head

}
```

### 两两交换链表中的节点

> 此部分代码在 Exchange.ts 中

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

**你不能只是单纯的改变节点内部的值**，而是需要实际的进行节点交换。

```typescript
/**
 * 递归两两交换相邻的节点
 * 
 * @param {ListNode} head 
 * @return {ListNode}
 */
function Exchange(head: ListNode) : ListNode {
    // 如果遍历到最后一个或最后为单数节点
    if (head === null || head.next === null) {
        return head
    }
    // 找到后面要交换的节点
    let next = head.next
    // head链接后面已经完成的子链
    head.next = Exchange(next.next)
    // next 链接head
    next.next = head
    return next
}
```

### 分隔链表

> 此部分代码在 SeparateList.ts 中

给定一个链表和一个特定值 *x*，对链表进行分隔，使得所有小于 *x* 的节点都在大于或等于 *x* 的节点之前。

同时保留两个分区中每个节点的初始相对位置。

```typescript
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
```

