"use strict";
exports.__esModule = true;
/**
 * 分离一个数组中的奇数和偶数，使奇数在前，偶数在后。
 * @param {number[]} arr
 * @return {number[]}
 */
function ReorderOddEven(arr) {
    var _a;
    if (arr.length < 2) {
        return arr;
    }
    // 左侧指针
    var left = 0;
    // 右侧指针
    var right = arr.length - 1;
    // 当两者未重合时
    while (left < right) {
        // 遍历找到左侧的偶数
        while (arr[left] % 2 !== 0 && left < right) {
            left++;
        }
        // 遍历找到右侧的奇数
        while (arr[right] % 2 === 0 && right > left) {
            right--;
        }
        // 交换位置
        _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
    }
    return arr;
}
exports.ReorderOddEven = ReorderOddEven;
