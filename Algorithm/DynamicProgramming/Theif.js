"use strict";
exports.__esModule = true;
/**
 * 打家劫舍
 * @param {number[]} houses 每家能得到多少钱
 * @return {number}
 */
function Rob(houses) {
    var len = houses.length;
    // 特殊情况 只有一个房子
    if (len <= 1) {
        return houses[len - 1] ? houses[len - 1] : 0;
    }
    // 记录到第几家可以获得的最高价值
    var arr = [houses[0], Math.max(houses[0], houses[1])];
    for (var i = 2; i < len; i++) {
        arr[i] = Math.max(arr[i - 2] + houses[i], arr[i - 1]);
    }
    // 获得能得到的最高价值
    return arr[len - 1];
}
exports.Rob = Rob;
/**
 * 打家劫舍 II
 * @param {number[]} houses 每家能得到多少钱
 * @return {number}
 */
function Rob2(houses) {
    // 特殊情况 只有一个房子
    if (houses.length <= 1) {
        return houses[0] ? houses[0] : 0;
    }
    // 分成两个问题 求houses[0 - n-1] 和 houses[1, n]的较大者
    var arr1 = houses.slice(0, -1);
    var arr2 = houses.slice(1);
    return Math.max(Rob(arr1), Rob(arr2));
}
exports.Rob2 = Rob2;
