"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
    }
    // 入队列
    Queue.prototype.push = function (item) {
        this.queue.push(item);
    };
    // 出队列
    Queue.prototype.pop = function () {
        if (this.queue.length === 0) {
            return null;
        }
        return this.queue.shift();
    };
    // 返回队首元素
    Queue.prototype.peek = function () {
        return this.queue[0];
    };
    // 队列是否为空
    Queue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    return Queue;
}());
exports["default"] = Queue;
