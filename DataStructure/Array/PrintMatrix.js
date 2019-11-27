"use strict";
exports.__esModule = true;
/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * @param {number[][]} arr
 * @return {number[]}
 */
function PrintMatrix(arr) {
    // 设置起点坐标，起点坐标为 [start, start]
    var start = 0;
    // 获取行数
    var rows = arr.length;
    // 获取列数
    var columns = arr[0] ? arr[0].length : 0;
    // 存储结果
    var result = [];
    // 如果数组不存在或者不为二维数组 直接返回
    if (!rows || !columns) {
        return result;
    }
    // 循环到中间层，防止重复
    while (columns > start * 2 && rows > start * 2) {
        printCircle(arr, start, columns, rows, result);
        // 起点坐标向内部沿对角线移动
        start++;
    }
    return result;
}
exports.PrintMatrix = PrintMatrix;
/**
 * 沿着顺时针方向打印一圈。
 * @param {number[][]} arr
 * @param {number} start
 * @param {number} columns
 * @param {number} rows
 * @param {number[]} result
 */
function printCircle(arr, start, columns, rows, result) {
    // 结束列号
    var x = columns - start - 1;
    // 结束行号
    var y = rows - start - 1;
    // 能够传入，说明从左到右一定能打印
    // 横向从左到右打印一行
    for (var i = start; i <= x; i++) {
        result.push(arr[start][i]);
    }
    // 如果结束行号大于起始行号 则从上到下打印
    if (y > start) {
        // 纵向从上到下一列
        for (var i = start + 1; i <= y; i++) {
            result.push(arr[i][x]);
        }
        // 如果结束列号大于起始列号，需要从右向左打印
        if (x > start) {
            // 横向从右到左打印一行
            for (var i = x - 1; i >= start; i--) {
                result.push(arr[y][i]);
            }
            // 如果结束行号大于开始行号加1，需要从下向上打印
            if (y > start + 1) {
                for (var i = y - 1; i > start; i--) {
                    result.push(arr[i][start]);
                }
            }
        }
    }
}
