"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.data = [];
        this.top = 0;
    }
    // 入栈
    Stack.prototype.push = function (item) {
        this.data.push(item);
        this.top++;
    };
    // 出栈
    Stack.prototype.pop = function () {
        this.top--;
        return this.data.pop();
    };
    // 返回栈顶的元素
    Stack.prototype.peek = function () {
        return this.data[this.top - 1];
    };
    // 判断栈是否为空
    Stack.prototype.isEmpty = function () {
        return this.top === 0;
    };
    // 返回栈的大小
    Stack.prototype.size = function () {
        return this.top;
    };
    // 清空栈
    Stack.prototype.clear = function () {
        delete this.data;
        this.top = 0;
        this.data = [];
    };
    // 打印栈
    Stack.prototype.print = function () {
        console.log(this.data.toString());
    };
    return Stack;
}());
exports["default"] = Stack;
