"use strict";
exports.__esModule = true;
/**
 * 给定一个整数数组 arr 和一个目标值 target，在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 *
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
function SumTwoNumbers(arr, target) {
    var len = arr.length;
    var result = [];
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i, j);
            }
        }
    }
    return result;
}
exports.SumTwoNumbers = SumTwoNumbers;
