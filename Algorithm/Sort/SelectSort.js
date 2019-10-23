"use strict";
exports.__esModule = true;
/**
 * 选择排序，每次循环找到一个最小的数放在前面的有序队列中
 * @param {number[]} array
 * @return {number[]}
 */
function SelectSort(array) {
    var _a;
    for (var i = 0; i < array.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        _a = [array[minIndex], array[i]], array[i] = _a[0], array[minIndex] = _a[1];
    }
    return array;
}
exports["default"] = SelectSort;
