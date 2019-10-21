"use strict";
exports.__esModule = true;
var CircularDeque = /** @class */ (function () {
    function CircularDeque(k) {
        this.k = k;
        this.size = 0;
        this.data = new Array();
    }
    // 将一个元素添加到双端队列头部
    CircularDeque.prototype.insertFront = function (item) {
        if (this.size === this.k) {
            return false;
        }
        else {
            this.size++;
            this.data.unshift(item);
            return true;
        }
    };
    // 将一个元素添加到双端队列尾部
    CircularDeque.prototype.insertLast = function (item) {
        if (this.size === this.k) {
            return false;
        }
        else {
            this.size++;
            this.data.push(item);
            return true;
        }
    };
    // 从头部删除一个元素
    CircularDeque.prototype.deleteFront = function () {
        if (this.size === 0) {
            return false;
        }
        else {
            this.size--;
            this.data.shift();
            return true;
        }
    };
    // 从尾部删除一个元素
    CircularDeque.prototype.deleteLast = function () {
        if (this.size === 0) {
            return false;
        }
        else {
            this.size--;
            this.data.pop();
            return true;
        }
    };
    // 从双端队列头部获得一个元素
    CircularDeque.prototype.getFront = function () {
        if (this.size === 0) {
            return -1;
        }
        else {
            return this.data[0];
        }
    };
    // 从双端队列尾部获取一个元素
    CircularDeque.prototype.getRear = function () {
        if (this.size === 0) {
            return -1;
        }
        else {
            return this.data[this.size - 1];
        }
    };
    // 检查双端队列是否为空
    CircularDeque.prototype.isEmpty = function () {
        return this.size === 0 ? true : false;
    };
    // 检查双端队列是否满了
    CircularDeque.prototype.isFull = function () {
        return this.size === this.k ? true : false;
    };
    return CircularDeque;
}());
exports["default"] = CircularDeque;
