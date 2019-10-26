"use strict";
exports.__esModule = true;
/**
 * 动态规划实现杨辉三角
 * @param {number} n 杨辉三角的高
 * @return {number}
 */
function YanghuiTriangle(n) {
    // 存放总的杨辉三角
    var result = [];
    for (var i = 0; i < n; i++) {
        var row = [];
        for (var j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            }
            else {
                row.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(row);
    }
    return result;
}
exports.YanghuiTriangle = YanghuiTriangle;
