
/**
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 * @param {string[][]} matrix
 * @return {number}
 */
function maxSquare (matrix: string[][]): number {
    // 参数验证
    if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
        throw new TypeError(`${matrix} is not a valid matrix`);
    }
    // 获取二维数组的宽高
    let rows = matrix.length,
        cols = rows > 0 ? matrix[0].length : 0;
    // 设置一个动态二维数组 每一位表示以该位左上角那位能构成的正方形的最大边长
    let dp = new Array(rows + 1);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(cols + 1).fill(0);
    }
    // 设置一个最大边长变量
    let maxLens = 0;
    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= cols; j++) {
            if (matrix[i-1][j-1] === '1') {
                dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1;
                maxLens = Math.max(dp[i][j], maxLens);
            }
        }
    }
    // 返回最大正方形的面积
    return maxLens * maxLens;
}

export {maxSquare}