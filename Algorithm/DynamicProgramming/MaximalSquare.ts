
/**
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 * @param {string[][]} matrix
 * @return {number}
 */
function maximalSquare (matrix: string[][]): number {
    // 获取原二维数组的长和宽
    let rows = matrix.length, cols = rows > 0 ? matrix[0].length : 0;
    // 获取过的正方形的最大边长
    let maxLens = 0;
    // 初始化一个用来记录的二维数组 
    let dp = new Array(rows + 1);
    for (let i=0; i <dp.length; i++) {
        dp[i] = new Array(cols + 1).fill(0);
    }
    // d[i][j] 为原二维数组到 [i-1,j-1] 位置的最大正方形边长
    for(let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (matrix[i-1][j-1] === '1') {
                // 每个为 "1" 点能构成的最大正方形为 其左、上、左上所能构成最大正方形的最小值加1
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1;
                maxLens = Math.max(maxLens, dp[i][j]);
            }
        }
    }
    // 最大正方形面积即为最大边长2倍
    return maxLens * maxLens;
}

export {maximalSquare}