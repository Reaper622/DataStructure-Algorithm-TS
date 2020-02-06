"use strict";
exports.__esModule = true;
/**
 * 定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * 请不要使用除法
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // 定义输出所用数组
    var output = new Array(nums.length);
    var cur = 1;
    // 除该值之外的所有乘积 = 左侧的乘积 x 右侧的乘积
    // 先给每一项定义为当前值左侧的乘值
    for (var i = 0; i < nums.length; i++) {
        output[i] = cur;
        cur = cur * nums[i];
    }
    cur = 1;
    // 再给每一项乘上右侧的乘值
    for (var i = nums.length - 1; i >= 0; i--) {
        output[i] = output[i] * cur;
        cur = nums[i] * cur;
    }
    return output;
};
exports.productExceptSelf = productExceptSelf;
