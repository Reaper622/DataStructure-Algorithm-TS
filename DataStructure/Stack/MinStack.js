"use strict";
exports.__esModule = true;
/**
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) -- 将元素 x 推入栈中。
 * pop() -- 删除栈顶的元素。
 * top() -- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 */
var MinStack = /** @class */ (function () {
    function MinStack() {
        this.stack = [];
        this.min = [];
    }
    /**
     * @param {T} x
     * @return {void}
     */
    MinStack.prototype.push = function (x) {
        this.stack.push(x);
        var min = this.getMin();
        if (min === undefined || min >= x) {
            this.min.push(x);
        }
    };
    ;
    /**
     * @return {T}
     */
    MinStack.prototype.pop = function () {
        var exit = this.stack.pop();
        if (exit === this.getMin()) {
            this.min.pop();
        }
        return exit;
    };
    ;
    /**
     * @return {T}
     */
    MinStack.prototype.top = function () {
        if (this.stack.length === 0) {
            return;
        }
        return this.stack[this.stack.length - 1];
    };
    ;
    /**
     * @return {T}
     */
    MinStack.prototype.getMin = function () {
        if (this.min.length === 0) {
            return;
        }
        return this.min[this.min.length - 1];
    };
    ;
    return MinStack;
}());
exports["default"] = MinStack;
