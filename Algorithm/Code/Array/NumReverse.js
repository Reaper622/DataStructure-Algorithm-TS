"use strict";
exports.__esModule = true;
exports["default"] = (function (x) {
    // 数据溢出
    if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
        return 0;
    }
    var neg = x < 0;
    if (neg)
        x = -x;
    var str = x.toString().split('');
    var resultStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        resultStr = resultStr + str[i];
    }
    var result = parseInt(resultStr);
    return neg ? -result : result;
});
