"use strict";
exports.__esModule = true;
/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * @param {String} num1
 * @param {String} num2
 * @return {string}
 */
function StringMultiply(num1, num2) {
    if (typeof num1 !== 'string' || typeof num2 !== 'string' || num1.length === 0 || num2.length === 0) {
        return "";
    }
    // num1的第i位和num2的第j位相乘，结果放在乘积中的位置是[i+j, i+j+1]
    var len1 = num1.length;
    var len2 = num2.length;
    var result = new Array(len1 + len2).fill(0);
    for (var i = len1 - 1; i >= 0; --i) {
        for (var j = len2 - 1; j >= 0; --j) {
            var bitmul = (parseInt(num1[i])) * (parseInt(num2[j]));
            bitmul += result[i + j + 1]; // 加低位判断是否有新的进位
            result[i + j] += Math.floor(bitmul / 10); // 添加十位
            result[i + j + 1] = bitmul % 10; // 添加后置个位
        }
    }
    var index = 0;
    // 去掉前置0
    while (index < result.length - 1 && result[index] === 0) {
        index++;
    }
    return result.slice(index).join('');
}
exports.StringMultiply = StringMultiply;
