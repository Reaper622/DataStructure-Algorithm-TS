"use strict";
exports.__esModule = true;
/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 如果找到了就输出这个数字，如果不存在输出0
 * @param {number[]} numbers
 * @return {number}
 */
function MoreThanHalfNum(numbers) {
    if (!numbers && numbers.length < 1) {
        return 0;
    }
    else {
        var length_1 = numbers.length;
        // 开辟额外空间存储出现次数
        var count = {};
        for (var i = 0; i < length_1; i++) {
            // 用属性值存放出现次数，如果已存在此属性说明重复，累计次数
            if (count['the' + numbers[i]]) {
                count['the' + numbers[i]]++;
            }
            else {
                count['the' + numbers[i]] = 1;
            }
            // 如果超过半数 则返回
            if (count['the' + numbers[i]] > length_1 / 2) {
                return numbers[i];
            }
        }
        // 不存在 就返回0
        return 0;
    }
}
exports.MoreThanHalfNum = MoreThanHalfNum;
