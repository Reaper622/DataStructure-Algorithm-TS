/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n: number): string[] {
    if (n === 0) {
        return [];
    }
    let res = [];
    dfs('', n, n, res);
    return res;
};
/**
 * 使用dfs算法到结果集中，同时根据左侧括号和右侧括号可用个数进行剪枝。
 * @param {string} str
 * @param {number} left
 * @param {number} right
 * @param {string[]} res
**/
var dfs = function (str: string, left: number, right: number, res: string[]): void {
    if (left === 0 && right === 0) {
        res.push(str);
        return
    }
    // 如果右侧可用已经小于左侧可用 证明已经无效 直接剪枝
    if (right < left) {
        return;
    }
    
    if (left > 0) {
        dfs(str + '(', left - 1, right, res);
    }
    
    if (right > 0) {
        dfs(str + ')', left, right - 1, res);
    }
}


export {generateParenthesis}