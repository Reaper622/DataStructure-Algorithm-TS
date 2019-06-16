"use strict";
exports.__esModule = true;
var Roma;
(function (Roma) {
    Roma[Roma["I"] = 1] = "I";
    Roma[Roma["V"] = 5] = "V";
    Roma[Roma["X"] = 10] = "X";
    Roma[Roma["L"] = 50] = "L";
    Roma[Roma["C"] = 100] = "C";
    Roma[Roma["D"] = 500] = "D";
    Roma[Roma["M"] = 1000] = "M";
})(Roma || (Roma = {}));
exports["default"] = (function (str) {
    var strArr = str.split('');
    var romaMap = function (word, lastWord) {
        switch (word) {
            case 'I': return 1;
            case 'V': {
                if (lastWord === 'I') {
                    return 4 - 1;
                }
                else {
                    return 5;
                }
            }
            case 'X': {
                if (lastWord === 'I') {
                    return 9 - 1;
                }
                else {
                    return 10;
                }
            }
            case 'L': {
                if (lastWord === 'X') {
                    return 40 - 10;
                }
                else {
                    return 50;
                }
            }
            case 'C': {
                if (lastWord === 'X') {
                    return 90 - 10;
                }
                else {
                    return 100;
                }
            }
            case 'D': {
                if (lastWord === 'C') {
                    return 400 - 100;
                }
                else {
                    return 500;
                }
            }
            case 'M': {
                if (lastWord === 'C') {
                    return 900 - 100;
                }
                else {
                    return 1000;
                }
            }
        }
    };
    var result = 0;
    for (var i = 0; i < strArr.length; i++) {
        if (i = 0) {
            result += romaMap(strArr[i], '');
        }
        else {
            result += romaMap(strArr[i], strArr[i - 1]);
        }
    }
    return result;
});
