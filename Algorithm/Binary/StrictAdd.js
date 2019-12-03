"use strict";
exports.__esModule = true;
/**
 * 在不使用数学运算的前提下计算加法。
 * @param {number} num1
 * @param {number} num2
 */
function StrictAdd(num1, num2) {
    // 定义变量存储和、进位
    var sum, carry;
    while (num2 !== 0) {
        // 首先做异或操作
        sum = num1 ^ num2;
        // 计算进位
        carry = (num1 & num2) << 1;
        // 循环计算进位 直到不存在进位
        num1 = sum;
        num2 = carry;
    }
    return num1;
}
exports.StrictAdd = StrictAdd;
