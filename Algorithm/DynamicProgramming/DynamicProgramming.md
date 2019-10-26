# 动态规划

动态规划是一种**分阶段**求解的数学思想。「大事化小，小事化了」，是一种自底向上的算法，可以和递归相辅相成。用来解决使用递归会产生高时间/空间复杂度的情况。使用动态规划可以省略大量的复杂计算。

动态规划中包含三个重要的概念：

- 最优子结构 【可将当前要解决的大问题分成小问题的最优情况】
- 边界 【特殊判断情况】
- 状态转移公式 【大问题分解为小问题的统一公式】

以斐波那契数列举例：

- 最优子结构: `Fibonacci(10) = Fibonacci(9) + Fibonacci(8)`
- 边界: `Fibonacci(1)`与`Fibonacci(2)`
- 状态转移公式: `Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)`

但同时，动态规划并不是什么时候都是最优解,譬如当时间复杂度为`O(n*m)`「m为常数」的m过大时，有时甚至会超过指数大小，所以使用动态规划要根据实际情况使用。

## 斐波那契数列

> 此部分代码在 Recursion/Fibonacci.ts 中

```typescript
/**
 * 使用非递归的动态规划实现斐波那契数列
 * @param {number} n 
 * @return {number}
 */
function Fibonacci(n: number): number {
    if (n < 2) {
        return n
    }
    // 记录索引值
    let i = 2
    // 记录前一个值
    let pre = 1
    // 记录当前值
    let current = 1
    // 记录结果
    let result = 0
    while(i++ < n) {
        result = pre + current
        pre = current
        current = result
    }
    return result
}
```

## 泰波那契数列

> 此部分代码在 Tribonacci.ts 中

```typescript
/**
 * 泰波那契数列 Tn+3 = Tn + Tn+1 + Tn+2
 * @param {number} n 
 * @return {number}
 */
function Tribonacci (n: number): number {
    if (n === 0) {
        return 0
    } else if (n < 3) {
        return 1
    } else {
        let arr = [0, 1, 1]
        let result = 0
        for(let i = 3; i <= n; i++) {
            result = arr[i-3] + arr[i-2] + arr[i-1]
            arr.push(result)
        }
        return arr[n]
    }
}
```

## 杨辉三角

> 此部分代码在 YanghuiTriangle.ts 中

在杨辉三角中，每个数都是他左上方和右上方的数之和。

```typescript
/**
 * 动态规划实现杨辉三角
 * @param {number} n 杨辉三角的高
 * @return {number}
 */
function YanghuiTriangle (n: number) {
    // 存放总的杨辉三角
    let result = []
    for(let i = 0; i < n; i++) {
      	// 一排的存储空间
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
```

