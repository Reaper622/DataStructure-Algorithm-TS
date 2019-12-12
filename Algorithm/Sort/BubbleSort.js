"use strict";
exports.__esModule = true;
/**
 * 冒泡排序，使用循环数组的方法，比较当前元素和下一个元素，如果当前元素大，向上冒泡
 *
 * @param {number[]} array
 * @return {number[]}
 */
function BubbleSort(array) {
    var _a;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
            }
        }
    }
    return array;
}
exports.BubbleSort = BubbleSort;
function BubbleSortBetter(array) {
    var _a;
    var i = array.length - 1;
    while (i > 0) {
        // 定义发生变化位置 即下一次遍历起始位置
        var position = 0;
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                // 定义发生变化的位置 确定下一次变化的重点位置
                position = j;
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
            }
        }
        // 定义下一次遍历的重点，避免重复遍历
        i = position;
    }
    return array;
}
exports.BubbleSortBetter = BubbleSortBetter;
