---
sidebar: auto
---

# 回溯算法
解决一个回溯问题，实际上就是一个决策树的遍历过程。

回溯一般有三个指标：
- 路径：已经做出的选择。
- 选择列表：你当前可以做的选择。
- 结束的条件：决策树底层，无法再做出选择。

回溯算法一般就是纯暴力穷举，所以会存在高的复杂度。但一般可以使用剪枝来降低复杂度。

回溯算法在执行过程中一般要维护走过的`路径`和当前可做的`选择列表`，并在触发`结束条件`时，将路径结果记入结果集。


## 括号生成
> 此部分代码在 GenerateParenthesis.ts

给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

```typescript
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
```