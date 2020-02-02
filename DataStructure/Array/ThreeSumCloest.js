"use strict";
exports.__esModule = true;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length < 3) {
        return null;
    }
    // 排序nums数组
    nums.sort(function (a, b) { return (a - b); });
    var abs = Number.MAX_VALUE;
    var result = 0;
    var len = nums.length;
    for (var i = 0; i < len - 2; i++) {
        // console.log(i,abs, result)
        // 去除重复项
        if (i && nums[i] === nums[i - 1]) {
            continue;
        }
        var left = i + 1;
        var right = len - 1;
        while (left < right) {
            var newResult = nums[i] + nums[left] + nums[right];
            var newAbs = Math.abs(newResult - target);
            // 如果差值比当前最小差值小 就替换为此时的值
            if (newAbs < abs) {
                abs = newAbs;
                result = newResult;
            }
            if (newResult - target < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return result;
};
exports.threeSumClosest = threeSumClosest;
