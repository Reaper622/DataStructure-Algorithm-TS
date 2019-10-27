"use strict";
exports.__esModule = true;
/**
 * 实现求幂的功能
 * @param {number} x
 * @param {number} n
 */
function Pow(x, n) {
    // 对特殊情况和边界进行处理
    if (n === 0) {
        return 1;
    }
    else if (n === 1) {
        return x;
    }
    // 如果指数为负数
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    if (n % 2 === 0) {
        return Pow(x * x, n / 2);
    }
    else {
        return Pow(x * x, Math.floor(n / 2)) * x;
    }
}
exports.Pow = Pow;
