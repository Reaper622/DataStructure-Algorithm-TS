"use strict";
exports.__esModule = true;
/**
 * 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数。
 * @param {number} num
 * @return {number}
 */
function NumberOfOne(num) {
    // 记录1的个数
    var count = 0;
    // 判断的标识
    var flag = 1;
    while (flag) {
        // 当前位为1
        if (num & flag) {
            count++;
        }
        // 标识符左移一位 判断次低位是否为1
        flag = flag << 1;
    }
    return count;
}
exports.NumberOfOne = NumberOfOne;
/**
 * 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数。
 * @param {number} num
 * @return {number}
 */
function NumberOfOneBetter(num) {
    var count = 0;
    // 如果不为0就认为内部还有1
    while (num) {
        count++;
        num = num & (num - 1);
    }
    return count;
}
exports.NumberOfOneBetter = NumberOfOneBetter;
