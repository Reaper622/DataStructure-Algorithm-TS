"use strict";
exports.__esModule = true;
exports["default"] = (function (arr) {
    if (arr.length === 0) {
        return 0;
    }
    else if (arr.length === 1) {
        return 1;
    }
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
});
