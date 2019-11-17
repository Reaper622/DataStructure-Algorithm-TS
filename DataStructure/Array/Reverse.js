"use strict";
exports.__esModule = true;
/**
 * 将输入的字符串反转过来,不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间。
 * @param {string[]} s
 * @return {string[]}
 */
function ReverseString(s) {
    var _a;
    if (s.length < 2) {
        return s;
    }
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        _a = [s[right], s[left]], s[left] = _a[0], s[right] = _a[1];
        left++;
        right--;
    }
    return s;
}
exports.ReverseString = ReverseString;
