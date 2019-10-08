"use strict";
exports.__esModule = true;
exports["default"] = (function (x) {
    var str = x.toString().split('').reverse().join('');
    var result = parseInt(str);
    if (result === x) {
        return true;
    }
    else {
        return false;
    }
});
