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

export default CircularDeque