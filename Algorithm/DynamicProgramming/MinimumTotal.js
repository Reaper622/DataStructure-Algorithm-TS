"use strict";
exports.__esModule = true;
/**
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
    if (triangle.length <= 0 || triangle[0].length <= 0) {
        return 0;
    }
    var lens = triangle.length - 1;
    // 从三角形的底部开始
    for (var i = lens - 1; i >= 0; i--) {
        // 每一位替换为从底部到这一位的最短路径
        for (var j = 0; j <= i; j++) {
            triangle[i][j] = triangle[i][j] + Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    // 此时顶点即为三角形从上到下的最短路径
    return triangle[0][0];
}
exports.minimumTotal = minimumTotal;
