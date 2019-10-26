
/**
 * 动态规划实现杨辉三角
 * @param {number} n 杨辉三角的高
 * @return {number}
 */
function YanghuiTriangle (n: number) {
    // 存放总的杨辉三角
    let result = []
    for(let i = 0; i < n; i++) {
        let row = []
        for(let j = 0; j < i + 1; j++) {
            if (j === 0 || j=== i) {
                row.push(1)
            } else {
                row.push(result[i-1][j-1] + result[i-1][j])
            }
        }
        result.push(row)
    }
    return result
}

export { YanghuiTriangle }