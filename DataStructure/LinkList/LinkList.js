"use strict";
exports.__esModule = true;
var ListNode = /** @class */ (function () {
    /**
     *
     * @param {*} val
     * @param {ListNode} next
     */
    function ListNode(val, next) {
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var List = /** @class */ (function () {
    function List(arr) {
        if (arr) {
            this.head = new ListNode(arr[0], null);
            var current = this.head;
            for (var i = 1; i < arr.length; i++) {
                current.next = new ListNode(arr[i], null);
                current = current.next;
            }
        }
        else {
            this.head = new ListNode(null, null);
        }
    }
    /**
     * 从 0 开始计算，找到包括head 头节点 在哪的位于 index 位置的节点
     * @param { Number } index
     * @return {ListNode}
     */
    List.prototype.find = function (index) {
        var current = this.head;
        for (var i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    };
    /**
     * 在指定位置插入节点
     *
     * @param {any} value
     * @param {number} index
     */
    List.prototype.insert = function (value, index) {
        // 获取当前位置前一个节点
        var prev = this.find(index - 1);
        var next = new ListNode(value, prev.next);
        prev.next = next;
    };
    /**
     *  删除指定位置的节点
     *
     * @param {number} index
     */
    List.prototype["delete"] = function (index) {
        // 如果要删除头节点
        if (index === 0) {
            this.head = this.head.next;
        }
        else if (this.find(index) === null || this.find(index).val === null) {
            throw Error('输入节点不存在');
        }
        else {
            // 获取要删除节点的前一个节点
            var prev = this.find(index - 1);
            prev.next = prev.next.next;
        }
    };
    /**
     * 正序遍历链表,返回一个数组
     *
     * @return {any[]}
     *
     */
    List.prototype.PositiveTraverse = function () {
        var arr = [];
        var current = this.head;
        while (current !== null) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    };
    /**
     * 逆序遍历链表，返回一个数组
     *
     * @return {any[]}
     */
    List.prototype.NegativeTraverse = function () {
        var arr = [];
        var current = this.head;
        while (current !== null) {
            arr.unshift(current.val);
            current = current.next;
        }
        return arr;
    };
    /**
     * 删除排序链表中的重复元素
     */
    List.prototype.DeleteDuplicates = function () {
        var current = this.head;
        // 暂存值前一个节点的值
        var temp;
        // 要删除节点的
        var toDelete;
        while (current && current.next !== null) {
            temp = current.val;
            // 如果重复, 删除重复节点
            if (current.next.val === temp) {
                toDelete = current.next;
                current.next = toDelete.next;
            }
            else {
                current = current.next;
                temp = current.val;
            }
        }
    };
    return List;
}());
exports.List = List;
