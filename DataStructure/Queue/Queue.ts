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

export default Queue