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
exports["default"] = BubbleSort;
