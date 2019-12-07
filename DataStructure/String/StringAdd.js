"use strict";
exports.__esModule = true;
/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function StringAdd(num1, num2) {
    if (typeof num1 !== 'string' || typeof num2 !== 'string' || num1.length < 1 || num2.length < 1) {
        return '';
    }
    // 补位
    while (num1.length < num2.length) {
        num1 = '0' + num1;
    }
    while (num2.length < num1.length) {
        num2 = '0' + num2;
    }
    var len = num1.length;
    // 存储结果的数组
    var result = [];
    // 进位
    var plus = 0;
    for (var i = len - 1; i >= 0; i--) {
        var sum = parseInt(num1[i]) + parseInt(num2[i]) + plus;
        if (sum > 9) {
            sum = sum % 10;
            plus = 1;
        }
        else {
            plus = 0;
        }
        result.unshift(sum);
    }
    return result.join('');
}
exports.StringAdd = StringAdd;
