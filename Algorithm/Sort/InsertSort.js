"use strict";
exports.__esModule = true;
/**
 * 将左侧序列看为一个有序的序列，每次都将要插入的数字插入到合适的位置
 * 插入时，从有序序列的最右侧开始比较，若比较的数较大，比较的数后移一位，要插入的数继续向前比较知道找到要插入的位置
 *
 * @param {number[]} array
 * @return {number[]}
 */
function InsertSort(array) {
    var _a;
    // 从第二位开始，默认第一位为有序序列了
    for (var i = 1; i < array.length; i++) {
        // 此时要插入的位置
        var target = i;
        for (var j = i - 1; j >= 0; j--) {
            if (array[target] < array[j]) {
                _a = [array[j], array[target]], array[target] = _a[0], array[j] = _a[1];
                target = j;
            }
            else {
                break;
            }
        }
    }
    return array;
}
exports["default"] = InsertSort;
