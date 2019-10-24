"use strict";
exports.__esModule = true;
var Heap_1 = require("../../DataStructure/Heap/Heap");
/**
 * 根据传入堆的类型来返回排序数组
 * 大顶堆对应从大到小
 * 小顶堆对应从小到大
 *
 * @param {number[]} array
 * @param {string} type
 */
function HeapSort(array, type) {
    var len = array.length;
    var heap = new Heap_1["default"](type);
    heap.create(array);
    var result = [];
    for (var i = 0; i < len; i++) {
        result.push(heap.pop());
    }
    return result;
}
exports["default"] = HeapSort;
