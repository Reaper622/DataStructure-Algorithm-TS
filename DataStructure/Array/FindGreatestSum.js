"use strict";
exports.__esModule = true;
/**
 * 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。
 * 求所有子数组的和的最大值，若不存在，返回0
 *
 * @param {number[]} array
 * @return {number}
 */
function FindGreatestSum(array) {
    if (!array || array.length < 1) {
        return 0;
    }
    else {
        // 存储子数组总和
        var sum = array[0];
        // 存储子数组数组最大值
        var max = array[0];
        for (var i = 1; i < array.length; i++) {
            // sum 小于0，则当前sum值对后面累加无贡献，即开启新的子数组求和
            if (sum < 0) {
                sum = array[i];
            }
            else {
                sum = sum + array[i];
            }
            // 取最大值
            max = sum > max ? sum : max;
        }
        return max;
    }
}
exports.FindGreatestSum = FindGreatestSum;
