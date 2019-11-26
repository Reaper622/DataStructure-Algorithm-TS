---
sidebar: auto
---
# 队列

> 队列是一种先进先出的数据结构。通过队首出队列，通过队尾入队列。

## 队列的实现和基础操作

> 此部分代码在 Queue.ts 中

```typescript
class Queue<T> {
    // 队列的存储空间
    queue: Array<T>

    constructor () {
        this.queue = []
    }
    // 入队列
    public push(item: T):void {
        this.queue.push(item)
    }

    // 出队列
    public pop(): T {
        if (this.queue.length === 0) {
            return null
        }
        return this.queue.shift()
    }

    // 返回队首元素
    public peek(): T {
        return this.queue[0]
    }

    // 队列是否为空
    public isEmpty() : Boolean {
        return this.queue.length === 0
    }
}

```



## 循环队列

> 此部分代码在 CircleQueue.ts 中

循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

```typescript
class CircleQueue<T> {
    // 队列长度限制
    k: number
    // 头部指针
    head: number
    // 尾部指针
    tail: number
    // 队列长度
    size: number
    // 存储空间
    data: Array<T>
    constructor(k: number) {
        this.k = k
        this.head = -1
        this.tail = -1
        this.size = 0
        this.data = new Array(k)
    }

    // 获取队首元素，如果队列为空，返回-1
    public getFront(): T | number {
        return this.size === 0 ? -1 : this.data[this.head]
    }
    // 获取队尾元素，如果队列为空，返回-1
    public getRear(): T | number {
        return this.size === 0 ? -1 : this.data[this.tail]
    }
    // 入循环队列
    public enQueue(item: T): Boolean {
        // 队列已满
        if (this.size === this.k) {
            return false
        }
        if (this.tail === this.head && this.tail === -1) {
            this.head++
        }
        // 判断是否尾结点是否是队列最后一个结点，如果是，通过改变为第一个来实现循环
        this.tail = this.tail === this.k -1 ? 0 : this.tail + 1
        this.size++
        this.data[this.tail] = item
        return true
    }
    // 出循环队列
    public deQueue () {
        if (this.size === 0) {
            return false
        }
        delete this.data[this.head]
        // 头结点向后移动
        this.head = this.head === this.k - 1 ? 0 : this.head + 1
        this.size--
        // 如果清空后为空
        if (this.size === 0) {
            this.head = -1
            this.tail = -1
        }
        return true
    }

    // 检查队列是否为空
    isEmpty (): Boolean {
        return this.size === 0
    }

    // 检查循环队列是否已满
    isFull () {
        return this.size === this.k
    }
}

```

## 循环双端队列

> 此部分代码在 CircularDeque.ts

设计一个双端循环队列，头部可以插入和删除，尾部可以插入和删除，同时可以循环，我们可以直接使用限制长度的数组直接实现。

```typescript
class CircularDeque <T> {
    // 队列长度限制
    k: number
    // 队列长度
    size: number
    // 存储空间
    data: Array<T>

    constructor(k: number) {
        this.k = k
        this.size = 0
        this.data = new Array()
    }

    // 将一个元素添加到双端队列头部
    public insertFront(item: T): Boolean {
        if (this.size === this.k) {
            return false
        } else {
            this.size++
            this.data.unshift(item)
            return true
        }
    }

    // 将一个元素添加到双端队列尾部
    public insertLast(item: T): Boolean {
        if (this.size === this.k) {
            return false
        } else {
            this.size++
            this.data.push(item)
            return true
        }
    }

    // 从头部删除一个元素
    public deleteFront(): Boolean {
        if (this.size === 0) {
            return false
        } else {
            this.size--
            this.data.shift()
            return true
        }
    }

    // 从尾部删除一个元素
    public deleteLast(): Boolean {
        if (this.size === 0) {
            return false
        } else {
            this.size--
            this.data.pop()
            return true
        }
    }

    // 从双端队列头部获得一个元素
    public getFront() : T | number {
        if (this.size === 0) {
            return -1
        } else {
            return this.data[0]
        }
    }

    // 从双端队列尾部获取一个元素
    public getRear(): T | number {
        if (this.size === 0) {
            return -1
        } else {
            return this.data[this.size - 1]
        }
    }

    // 检查双端队列是否为空
    public isEmpty(): Boolean {
        return this.size === 0 ? true : false
    }

    // 检查双端队列是否满了
    public isFull(): Boolean {
        return this.size === this.k ? true : false
    }
}
```

