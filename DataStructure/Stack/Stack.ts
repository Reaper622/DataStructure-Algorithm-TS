class Stack<T> {
    // 栈的存储空间
    data: Array<T>
    // 栈顶元素索引
    top: number

    constructor() {
        this.data = []
        this.top = 0
    }
    // 入栈
    public push (item: any):void {
        this.data.push(item)
        this.top++
    }
    // 出栈
    public pop (): T {
        this.top--
        return  this.data.pop()
    }
    // 返回栈顶的元素
    public peek (): T {
        return this.data[this.top - 1]
    }
    // 判断栈是否为空
    public isEmpty (): Boolean {
        return this.top === 0 
    }
    // 返回栈的大小
    public size (): number {
        return this.top
    }
    // 清空栈
    public clear (): void {
        delete this.data
        this.top = 0
        this.data = []
    }
    // 打印栈
    public print (): void {
        console.log(this.data.toString())
    }
}

export default Stack