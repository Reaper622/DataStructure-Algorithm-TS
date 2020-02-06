---
sidebar: auto
---

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

## 打家劫舍

> 此部分代码在 Theif.ts 中

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

例如输入`[2,7,9,3,1]` 则会返回`12`，即进入 1号房屋、三号房屋和五号房屋得到的最高金额。

```typescript
/**
 * 打家劫舍
 * @param {number[]} houses 每家能得到多少钱
 * @return {number}
 */
function Rob(houses: number[]): number {
    const len = houses.length
    // 特殊情况 只有一个房子
    if(len <= 1) {
        return houses[len - 1] ? houses[len - 1] : 0
    }
    // 记录到第几家可以获得的最高价值
    let arr = [houses[0], Math.max(houses[0], houses[1])]
    for(let i = 2; i < len; i++) {
        arr[i] = Math.max(arr[i-2]+ houses[i], arr[i-1])
    }
    // 获得能得到的最高价值
    return arr[len - 1]
}
```

## 打家劫舍 II

> 此部分代码在 Theif.ts 中

与上题相同，只是此时的小区的房子是一个环形，意味着「最后一个」房子和「第一个」房子也是相连的。此时我们可以将问题分解。即我们可以将问题分成求不带最后一个房子的最大值和不带第一个房子的最大者，最后取其中较大者即可。

```typescript
/**
 * 打家劫舍 II
 * @param {number[]} houses 每家能得到多少钱
 * @return {number}
 */
function Rob2(houses: number[]): number {
    // 特殊情况 只有一个房子
    if (houses.length <= 1) {
        return houses[0] ? houses[0] : 0
    }
    // 分成两个问题 求houses[0 - n-1] 和 houses[1, n]的较大者
    let arr1 = houses.slice(0, -1)
    let arr2 = houses.slice(1)
    return Math.max(Rob(arr1), Rob(arr2)) //Rob的定义在上部
}
```

## 第N个丑数

> 此部分代码在 TheNOfTheUglyNumber.ts 中

编写一个程序，找出第 `n` 个丑数。丑数就是只包含质因数 `2, 3, 5` 的**正整数**。

根据丑数的定义，丑数应该是另一个丑数乘以2、3或者5的结果（1除外）。因此我们可以创建一个数组，里面的数字是排好序的丑数，每一个丑数都是前面的丑数乘以2、3或者5得到的。在乘以2的时候，能得到若干个小于或等于M的结果。由于是按照顺序生成的，小于或者等于M肯定已经在数组中了，我们不需再次考虑；还会得到若干个大于M的结果，但我们只需要第一个大于M的结果，因为我们希望丑数是按从小到大的顺序生成的，其他更大的结果以后再说。我们把得到的第一个乘以2后大于M的结果记为M2。同样，我们把已有的每一个丑数乘以3和5，能得到第一个大于M的结果M3和M5。那么下一个丑数应该是M2、M3和M5这3个数的最小者。对于重复的丑数，只需要直接进行跳过即可。

```typescript
/**
 * 编写一个程序，找出第 n 个丑数。
 * 丑数就是只包含质因数 2, 3, 5 的正整数。
 * @param {number} n 
 * @return {number}
 */
function TheNOfTheUglyNumber(n: number): number {
    if (n <= 0) {
        return 0;
    }
    // 定义一个存储丑数的数组，默认1为第一个丑数字
    let uglyNumbers = [1];
    // 记录下一个丑数的索引值
    let nextUglyIndex = 1;
    // 因为丑数就是比他小的丑数的2倍或者3倍或者5倍
    // 定义丑数的2倍索引、3倍索引和5倍索引
    let ugly2 = 0,ugly3 = 0, ugly5 = 0;
    // 当下一个索引值小于n时
    while (nextUglyIndex < n) {
        // 取2倍序列、3倍序列和5倍序列中的最小值
        let min = Math.min(uglyNumbers[ugly2] * 2, uglyNumbers[ugly3] * 3, uglyNumbers[ugly5] * 5);
        uglyNumbers[nextUglyIndex] = min;
        // 移动索引值
        while (uglyNumbers[ugly2] * 2 <= min)
            ugly2++
        while (uglyNumbers[ugly3] * 3 <= min)
            ugly3++
        while (uglyNumbers[ugly5] * 5 <= min)
            ugly5++
        nextUglyIndex++;
    }
    // 循环结束时，此时nextUglyIndex = n, 索引为 n-1 的丑数即为第n个丑数
    return uglyNumbers[nextUglyIndex - 1];
}
```

## 最大正方形

> 此部分在 MaximalSquare.ts 中

在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

我们先用0初始化另一个矩阵`dp`，用来记录每个点上的最大正方形边长。

`dp(i,j)`为原矩阵上`[i-1,j-1]`上能构成的最大的正方形的边长。

对于之后的每一个`d(i,j) = Math.min(dp[i][j - 1], dp[i -1][j], dp[i - 1][j - 1]) + 1`

同时记录出现的最大边长，之后我们所求的面积即为最大边长*最大边长。

```typescript
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
```

## 三角形最小路径和

> 此部分在 MinimumTotal.ts 中

给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

通过动态规划，我们进行自底向上的循环来解决问题。

```typescript
/**
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * @param {number[][]} triangle
 * @return {number}
 */
function  minimumTotal (triangle: number[][]): number {
    if (triangle.length <= 0 || triangle[0].length <= 0) {
        return 0;
    }
    const lens = triangle.length - 1;
    // 从三角形的底部开始
    for(let i = lens - 1;i >= 0; i--) {
        // 每一位替换为从底部到这一位的最短路径
        for(let j = 0; j <= i; j++) {
             triangle[i][j] =  triangle[i][j] + Math.min(triangle[i + 1][j], triangle[i + 1][j+1]);
        }
    }
    // 此时顶点即为三角形从上到下的最短路径
    return triangle[0][0];
}
```

## 俄罗斯套娃信封问题

> 此部分在 MaxEnvelopes.ts 中

给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

我们把这个问题视为在一定条件下的最长子序列，我们先对宽度进行升序排序，如果遇到宽度相同，就按照高度降序排序。之后把所有的高度汇聚到一个数组用二分法进行最长子序列的检测，即可得到结果。

```typescript
/**
 * 给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
 * 请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
 * @param {number[][]} envelopes
 * @return {number}
 */
function maxEnvelopes (envelopes: number[][]):number {
    if (!Array.isArray(envelopes) || envelopes.length < 1 ) {
        return 0;
    }
    // 首先对于宽度按升序排序，之后对于相同宽度则按照降序排序，因为两个宽度相同的信封不能相互包含，逆序保证在宽度相同的数对中最多选择一个
    envelopes.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    // 之后就是一个根据高度寻找最长递增序列的问题
    let height = [];
    // 使用二分查找找到高度中和合适值
    for(let i in envelopes) {
        height[i] = envelopes[i][1];
    }
    return HeightLTS(height);
};

/**
 * 传入一个数组，对这个数组寻找最大连续增大序列的长度。
 * @param  {number[]} height 
 * @return {number}
 */
function HeightLTS(height: number[]): number {
    let count = 0,
        len = height.length,
        queue = [];
    for(let i = 0; i < len; i++) {
        let env = height[i];
        let left = 0,
            right = count;
         // 寻找插入此信封的位置
        while (left < right) {
            let mid = left + Math.floor((right -left) / 2);
            if (queue[mid] >= env) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        // 增加一个信封
        if (left === count) count++;
        // 把这个信封添加到队列
        queue[left] = env;
    }
    return count;
}
```

## 除自身以外数组的乘积

> 此部分代码在 ProductExpectSelf.ts 中

给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

**说明:** 请**不要使用除法，**且在 O(*n*) 时间复杂度内完成此题。

我们通过两次O(n)的遍历完成，即除它之外的乘积等于左侧的乘积乘以右侧的乘积。

```typescript
/**
 * 定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * 请不要使用除法
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums: number[]): number[] {
    // 定义输出所用数组
    let output = new Array(nums.length);
    let cur = 1;
    // 除该值之外的所有乘积 = 左侧的乘积 x 右侧的乘积
    // 先给每一项定义为当前值左侧的乘值
    for(let i = 0; i < nums.length; i++) {
        output[i] = cur;
        cur = cur * nums[i];
    }
    cur = 1;
    // 再给每一项乘上右侧的乘值
    for(let i = nums.length - 1; i >= 0; i--) {
        output[i] = output[i] * cur;
        cur = nums[i] * cur;
    }
    return output;
    
};
```

