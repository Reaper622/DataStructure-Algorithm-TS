"use strict";
exports.__esModule = true;
/**
 * 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。
 * 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
    // 上下延伸
    var dx = [1, -1, 0, 0];
    // 左右延伸
    var dy = [0, 0, -1, 1];
    // 存储最大值
    var maxValue = 0;
    // 获取边界长度
    var rows = grid.length;
    var columns = grid[0].length;
    // 深度遍历算法,获取岛屿面积
    var dfs = function (grid, x, y) {
        // 判断点是否合法
        if (x < 0 || x >= rows || y < 0 || y >= columns || grid[x][y] === 0) {
            return 0;
        }
        // 统计面积
        var area = 1;
        // 将原值清空，防止重复计算
        grid[x][y] = 0;
        // 遍历上下左右查看是否还有岛屿
        for (var i = 0; i < dx.length; i++) {
            area = area + dfs(grid, x + dx[i], y + dy[i]);
        }
        return area;
    };
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if (grid[i][j] === 1) {
                maxValue = Math.max(maxValue, dfs(grid, i, j));
            }
        }
    }
    return maxValue;
}
exports.maxAreaOfIsland = maxAreaOfIsland;
