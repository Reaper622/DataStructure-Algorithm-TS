/**
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) -- 将元素 x 推入栈中。
 * pop() -- 删除栈顶的元素。
 * top() -- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 */
class MinStack<T> {
    stack: Array<T>
    min: Array<T>

    constructor() {
        this.stack = [];
        this.min = [];
    }

    /** 
     * @param {T} x
     * @return {void}
     */
    public push(x: T): void {
        this.stack.push(x);
        let min = this.getMin();
        if (min === undefined || min >= x) {
            this.min.push(x);
        }
    };

    /**
     * @return {T}
     */
    public pop (): T {
        let exit = this.stack.pop();
        if (exit === this.getMin()) {
            this.min.pop();
        }
        return exit;
    };

    /**
     * @return {T}
     */
    public top (): T {
        if (this.stack.length === 0) {
            return;
        }
        return this.stack[this.stack.length - 1];
    };

    /**
     * @return {T}
     */
    public getMin (): T {
        if (this.min.length === 0) {
            return;
        }
        return this.min[this.min.length - 1];
    };
}


export default MinStack