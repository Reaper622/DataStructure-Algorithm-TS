"use strict";
exports.__esModule = true;
/**
 * 在一个有序数组中查找和为sum的两个数字，如果有多个，则输出乘积最小的。
 * @param {number[]} array
 * @param {number} sum
 * @return {number[]}
 */
function FindNumWithSum(array, sum) {
    if (!array || sum < 0) {
        return [];
    }
    // 因为返回乘积最小的 即和相同，越分散乘积越小，则从两侧开始查找
    // 设置左索引
    var left = 0;
    // 设置右索引
    var right = array.length - 1;
    while (left < right) {
        var total = array[left] + array[right];
        if (total === sum) {
            return [array[left], array[right]];
        }
        else if (total < sum) {
            // 和小于目标值，左索引向右移动
            left++;
        }
        else {
            // 和大于目标值，右索引向左移动
            right--;
        }
    }
    return [];
}
exports.FindNumWithSum = FindNumWithSum;
