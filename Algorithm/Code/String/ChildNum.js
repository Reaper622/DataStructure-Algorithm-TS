"use strict";
exports.__esModule = true;
exports["default"] = (function (str) {
    // 建立数据结构，堆栈，保存数据  
    var r = [];
    // 给定任意子输入，返回符合条件的字符串
    var match = function (str) {
        var j = str.match(/^(0+|1+)/)[0];
        var o = (parseInt(j[0]) ^ 1).toString().repeat(j.length);
        var reg = new RegExp("^(" + j + o + ")");
        if (reg.test(str)) {
            return RegExp.$1;
        }
        else {
            return '';
        }
    };
    // for 循环控制程序流程
    for (var i = 0, len = str.length - 1; i < len; i++) {
        var sub = match(str.slice(i));
        if (sub) {
            r.push(sub);
        }
    }
    return r;
});
