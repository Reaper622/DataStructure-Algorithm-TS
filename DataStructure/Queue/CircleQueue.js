"use strict";
exports.__esModule = true;
var CircleQueue = /** @class */ (function () {
    function CircleQueue(k) {
        this.k = k;
        this.head = -1;
        this.tail = -1;
        this.size = 0;
        this.data = new Array(k);
    }
    // 获取队首元素，如果队列为空，返回-1
    CircleQueue.prototype.getFront = function () {
        return this.size === 0 ? -1 : this.data[this.head];
    };
    // 获取队尾元素，如果队列为空，返回-1
    CircleQueue.prototype.getRear = function () {
        return this.size === 0 ? -1 : this.data[this.tail];
    };
    // 入循环队列
    CircleQueue.prototype.enQueue = function (item) {
        // 队列已满
        if (this.size === this.k) {
            return false;
        }
        if (this.tail === this.head && this.tail === -1) {
            this.head++;
        }
        // 判断是否尾节点是否是队列最后一个节点，如果是，通过改变为第一个来实现循环
        this.tail = this.tail === this.k - 1 ? 0 : this.tail + 1;
        this.size++;
        this.data[this.tail] = item;
        return true;
    };
    // 出循环队列
    CircleQueue.prototype.deQueue = function () {
        if (this.size === 0) {
            return false;
        }
        delete this.data[this.head];
        // 头节点向后移动
        this.head = this.head === this.k - 1 ? 0 : this.head + 1;
        this.size--;
        // 如果清空后为空
        if (this.size === 0) {
            this.head = -1;
            this.tail = -1;
        }
        return true;
    };
    // 检查队列是否为空
    CircleQueue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    // 检查循环队列是否已满
    CircleQueue.prototype.isFull = function () {
        return this.size === this.k;
    };
    return CircleQueue;
}());
exports["default"] = CircleQueue;
