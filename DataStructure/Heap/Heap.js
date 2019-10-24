"use strict";
exports.__esModule = true;
var Heap = /** @class */ (function () {
    function Heap(type) {
        this.type = type;
        this.value = [];
    }
    // 传入数组，创建一个堆
    Heap.prototype.create = function (numbers) {
        this.value = numbers;
        var length = this.value.length;
        // 从第一个非叶子节点开始调整结构
        for (var i = Math.floor((length / 2) - 1); i >= 0; i--) {
            this.adjust(i, length);
        }
    };
    // 调整堆的结构
    Heap.prototype.adjust = function (index, length) {
        var _a;
        var array = this.value;
        for (var i = 2 * index + 1; i < length; i = 2 * i + 1) {
            if (i + 1 < length) {
                // 如果符合堆的规则
                if ((this.type === 'max' && array[i + 1] > array[i]) || (this.type === 'min' && array[i + 1] < array[i])) {
                    i++;
                }
            }
            // 如果不符合规则 则进行交换
            if ((this.type === 'max' && array[index] < array[i]) || (this.type === 'min' && array[index] > array[i])) {
                _a = [array[i], array[index]], array[index] = _a[0], array[i] = _a[1];
                index = i;
            }
        }
    };
    // 向堆中添加元素
    /**
     * 堆属于优先队列，只能从末尾添加
     * 添加后有可能破坏堆的结构，需要从下到上进行调整
     * 如果元素小于父元素，向上置换
     *
     */
    Heap.prototype.add = function (item) {
        var _a;
        var array = this.value;
        array.push(item);
        if (array.length > 1) {
            var index = array.length - 1;
            var target = Math.floor((index - 1) / 2);
            while (target >= 0) {
                if ((this.type === 'min' && array[index] < array[target]) || (this.type === 'max' && array[index] > array[target])) {
                    _a = [array[target], array[index]], array[index] = _a[0], array[target] = _a[1];
                    index = target;
                    target = Math.floor((index - 1) / 2);
                }
                else {
                    break;
                }
            }
        }
    };
    /**
     * 由于堆属于优先队列，因此从头部移除
     * 移除后，末尾元素填充头部，开始从头部进行下沉操作
     */
    // 弹出堆顶元素
    Heap.prototype.pop = function () {
        var array = this.value;
        var result = null;
        if (array.length > 1) {
            result = array[0];
            // 将最后一个叶子结点置于堆顶 之后调整结构
            array[0] = array.pop();
            this.adjust(0, array.length);
        }
        else if (array.length === 1) {
            return array.pop();
        }
        return result;
    };
    return Heap;
}());
exports["default"] = Heap;
