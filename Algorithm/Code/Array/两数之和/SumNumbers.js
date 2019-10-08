"use strict";
exports.__esModule = true;
exports["default"] = (function (arr, target) {
    var len = arr.length;
    var result = [];
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i, j);
            }
        }
    }
    return result;
});
