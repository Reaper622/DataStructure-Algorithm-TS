"use strict";
exports.__esModule = true;
/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 如果找到了就输出这个数字，如果不存在输出0。
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
/**
 * 优化空间利用率，不额外开辟空间，时间复杂度依然为O(n)
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 如果找到了就输出这个数字，如果不存在输出0。
 * @param {number[]} numbers
 * @return {number}
 */
function MoreThanHalfNum2(numbers) {
    if (!numbers && numbers.length < 1) {
        return 0;
    }
    else {
        // 获取数组长度
        var len = numbers.length;
        // 从第一个开始统计
        var result = numbers[0];
        // 统计出现次数
        var times = 1;
        // 从第二个开始进行循环
        for (var i = 1; i < len; i++) {
            // 如果出现次数归零，则重新开始统计当前格的出现此处
            if (times === 0) {
                result = numbers[i];
                times = 1;
            }
            // 如果相同 出现次数加1
            else if (numbers[i] === result) {
                times++;
            }
            // 如果不同 出现此处减1
            else {
                times--;
            }
        }
        // 我们要找的数字出现次数比其他出现次数总和还要多
        // 因此我们要找的数字是最后将这个次数设置为1的对应数字。
        return result;
    }
}
exports.MoreThanHalfNum2 = MoreThanHalfNum2;
