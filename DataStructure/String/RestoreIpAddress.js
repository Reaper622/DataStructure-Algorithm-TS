"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * @param {string} s
 * @return {string[]}
 */
function RestoreipAddress(s) {
    if (typeof s !== 'string' || s.length > 12) {
        return [];
    }
    var result = [];
    ipHandler(s, [], result);
    return result;
}
exports.RestoreipAddress = RestoreipAddress;
/**
 * 处理剩余的字符并递归转化字符串。
 * @param {string} remain
 * @param {string[]} temp
 * @param {string[]} result
 */
function ipHandler(remain, temp, result) {
    // 已经存在三段，即此时为最后一段
    if (temp.length === 3) {
        // 判断剩余的字符串是否符合ip规范
        regular(remain) && result.push(__spreadArrays(temp, [remain]).join('.'));
        return;
    }
    // 递归循环遍历 1 - 3个字符，判断是否符合ip规范
    for (var i = 1; i < 4; i++) {
        regular(remain.substr(0, i)) && ipHandler(remain.substr(i), __spreadArrays(temp, [remain.substr(0, i)]), result);
    }
}
/**
 * 判断是否符合ip规则。
 * @param {string} s
 * @return {boolean}
 */
function regular(s) {
    if (!s.length)
        return false;
    // 不可小于0大于255，并且如果超过一位不能以0开头
    return +s >= 0 && +s <= 255 && (s.length > 1 ? s.charAt(0) !== '0' : true);
}
