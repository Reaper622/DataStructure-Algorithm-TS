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



