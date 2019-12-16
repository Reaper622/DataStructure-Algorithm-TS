---
sidebar: auto
---
# 链表

> 链表是用一组任意存储的单元来存储线性表的数据元素。一个对象存储着本身的值和下一个元素的地址。

- 查询元素需要遍历到指定元素，查询慢
- 插入元素只需要断开链接重新赋值，插入快

类似于 React 16 的 Fiber Node 连接而成的 Fiber Tree ，就是个单链表结构。



## 链表的数据结构

> 此部分代码在 LinkList.ts 中

首先我们定义链表内结点的数据结构

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
     * 从 0 开始计算，找到包括head 头结点 在哪的位于 index 位置的结点
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
     * 在指定位置插入结点
     * 
     * @param {any} value 
     * @param {number} index 
     */
    public insert(value: any, index: number): void {
        // 获取当前位置前一个结点
        let prev = this.find(index-1)
        let next = new ListNode(value, prev.next)
        prev.next = next
    }
    /**
     *  删除指定位置的结点
     * 
     * @param {number} index 
     */
    public delete(index: number): void {
        // 如果要删除头结点
        if (index === 0) {
            this.head = this.head.next
        } else if (this.find(index) === null || this.find(index).val === null) {
            throw Error('输入结点不存在')
        } else {
            // 获取要删除结点的前一个结点
            let prev = this.find(index-1)
            prev.next = prev.next.next
        }
    }

}
```

## 链表去重

> 此部分代码在 List 类中

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

```typescript
/**
     * 删除排序链表重复元素
     */
    public DeleteDuplicates(): void {
        let current = this.head
        // 暂存值前一个结点的值
        let temp: any
        // 要删除结点的
        let toDelete: ListNode

        while(current && current.next !== null) {
            temp = current.val
            // 如果重复, 删除重复结点
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





## 正向遍历与反向遍历

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

## 反转链表

> 此部分代码在 ReverseList.ts 中

将链表进行翻转，尾结点变为新的头结点，输入一个链表的头结点，返回反转后的新的头结点

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
    // 遍历所有的结点
    while(headNode) {
        // 暂存原来的next 用于遍历
        next = headNode.next
        // 将结点的next指向反转
        headNode.next = preNode
        preNode = headNode
        headNode = next
    }

    return preNode
}
```

## 反转链表 II

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
    // 首先向后遍历使 current 为要反转的首个结点
    while ( m > 1) {
        prev = current
        current = current.next
        m--
        n--
    }
    // 保存要反转结点的前一个结点
    let prevTail = prev
    // 保存第 m 个结点，即反转后的尾结点
    let theTail = current
    // 保存next结点用于遍历
    let theNext = null
    while (n > 0) {
        theNext = current.next
        current.next = prev
        prev = current
        current = theNext
        n--
    }
    // 如果从首个结点开始反转
    if (prevTail === null) {
        head = prev
    } 
    // 否则反转前一个结点连接反转后的头结点
    else {
        prevTail.next = prev
    }
    // 连接反转尾结点与原链表后序结点
    theTail.next = current
    
    return head

 }
```



## 合并链表

> 此部分代码在 MergeList.ts 中

传入两个有序链表的头结点，返回一个合并两个链表的有序链表



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
    // 链接未完全合并链表的后序结点
    if (!pHead) {
        node.next = qHead
    } else {
        node.next = pHead
    }
    list.head = list.head.next

    return list
    
}
```

## 删除链表的倒数第N个结点

> 这部分代码在 DeleteN.ts 中

给定一个链表，删除链表的倒数第 *n* 个结点，并且返回链表的头结点。

```typescript
/**
 * 删除链表的倒数第N个结点
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
    // 利用双指针法，首先领 a b 结点都指向头结点
    let a: ListNode = node
    let b: ListNode = node
    let c: ListNode = null
    // a提前移动 n 个结点
    for(let i = 0; i < n; i++) {
        a = a.next
        // 如果链表长度不超过 n
        if (!a) {
            return null
        }
    }
    // 向后遍历直到a到达尾部，此时b就为要删除的结点，c始终为b的前一个结点
    while(a) {
        c = b
        b = b.next
        a = a.next
    }
    // 删除b结点
    c.next = c.next.next

    return node.next
}

```



## 旋转链表指定的长度

> 此部分代码在 RotateRight.ts 中

给定一个链表，让每个结点向右移动k个位置。

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
 * 给定一个链表，旋转链表，将链表每个结点向右移动 k 个位置，其中 k 是非负数。
 * 
 * @param {ListNode} head 
 * @param {number} k 
 * @return {ListNode}
 */
function RotateRight (head: ListNode, k: number):ListNode {
    // 判断链表是否为空或只有一个结点
    if (head === null || head.next === null) {
        return head
    }
    // 定义n为链表长度
    let n : number
    // 定义一个结点用来遍历链表
    let old_tail = head
    // 首先获取链表内结点个数
    for(n = 1; old_tail.next !== null; n++) {
        old_tail = old_tail.next
    }
    // 形成闭环
    old_tail.next = head

    // 新的尾结点为 (n - k % n - 1) 个结点
    // 新的头结点为 (n - k % n) 个结点
    // 定义新的尾结点
    let new_tail = head
    for(let i = 0; i < (n - k % n - 1); i++) {
        new_tail = new_tail.next
    }
    // 定义新的头结点
    let new_head = new_tail.next;
    // 断开新的尾结点与后面的连接
    new_tail.next = null

    return new_head

}
```

## 两两交换链表中的结点

> 此部分代码在 Exchange.ts 中

给定一个链表，两两交换其中相邻的结点，并返回交换后的链表。

**你不能只是单纯的改变结点内部的值**，而是需要实际的进行结点交换。

```typescript
/**
 * 递归两两交换相邻的结点
 * 
 * @param {ListNode} head 
 * @return {ListNode}
 */
function Exchange(head: ListNode) : ListNode {
    // 如果遍历到最后一个或最后为单数结点
    if (head === null || head.next === null) {
        return head
    }
    // 找到后面要交换的结点
    let next = head.next
    // head链接后面已经完成的子链
    head.next = Exchange(next.next)
    // next 链接head
    next.next = head
    return next
}
```

## 分隔链表

> 此部分代码在 SeparateList.ts 中

给定一个链表和一个特定值 *x*，对链表进行分隔，使得所有小于 *x* 的结点都在大于或等于 *x* 的结点之前。

同时保留两个分区中每个结点的初始相对位置。

```typescript
/**
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的结点都在大于或等于 x 的结点之前。
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
    // 结束尾结点
    after_x.next = null
    // 合并原链表
    before_x.next = after_head.next
    return before_head.next
}
```

## 链表的中点

> 此部分代码在 LinkListMiddle.ts 中

给定一个带有头结点 `head` 的链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

```typescript
/**
 * 寻找链表的中点，如果是偶数链表返回中间结点中的后一个中间结点。
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
    // 判断奇偶 选择是否输出第二个结点
    return slow
}
```

## 两个链表的第一个公共结点

> 此部分代码在 FirstSameNode.ts 中

输入两个链表，找出它们的第一个公共结点。

```typescript
/**
 * 得到两个链表的第一个公共结点。
 * @param {ListNode} phead1 
 * @param {ListNode} phead2 
 * @return {ListNode}
 */
function FirstSameNode(phead1: ListNode, phead2: ListNode): ListNode {
    // 首先得到两个链表的长度
    let len1 = GetListLength(phead1);
    let len2 = GetListLength(phead2);
    // 获取两个链表的长度差
    let diff = Math.abs(len1 - len2);
    // 定义一个长链表的指针和短链表的指针
    let longHead: ListNode, shortHead: ListNode;
    if (len1 > len2) {
        longHead = phead1;
        shortHead = phead2;
    } else {
        longHead = phead2;
        shortHead = phead1;
    }
    // 先让长链表指针移动相差的距离
    for(let i = 0; i < diff; i++) {
        longHead = longHead.next;
    }
    while (longHead !== null && shortHead !== null && longHead.val !== shortHead.val) {
        longHead = longHead.next;
        shortHead = shortHead.next;
    }
    // 得到第一个公共结点
    let result = longHead;
    return result;
}

/**
 * 得到一个链表的长度。
 * @param {ListNode} phead 
 * @return {number}
 */
function GetListLength(phead: ListNode): number {
    let num = 0;
    while (phead.next) {
        num++;
        phead = phead.next;
    }
    return num
}
```

## 两数相加

> 此部分代码在 ListSum.ts 中

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

```typescript
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
```

## 链表排序

> 此部分代码在 SortList.ts 中

在 *O*(*n* log *n*) 时间复杂度和常数级空间复杂度下，对链表进行排序。

在`nlogn`的时间复杂度下，我们选择归并法，先用双指针法将链表划分为单个节点，再在合并时排序。

```typescript
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
```

## 合并K个有序链表

> 此部分代码在

合并 *k* 个排序链表，返回合并后的排序链表。

此问题使用归并方法，一直分割链表数组至最小单位后，递归调用合并方法。

```typescript
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
```

