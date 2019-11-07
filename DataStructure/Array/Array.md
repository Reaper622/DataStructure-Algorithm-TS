# 数组

> 数组是一种按顺序存储数据的集合，元素可以随机存取，因为数组中每个元素都可以通过数组索引识别。

## 双指针

> ​	一种在排序数组中使用的技巧，利用几个不同位置的指针，通过速度或方向的变化解决问题。

### 和为Sum的两个数字

> 此部分代码在 FindNumWithSum.ts 中

输入一个递增排序的数组和一个数字`sum`，在数组中查找两个数，使得他们的和正好是`sum`，如果有多对数字的和等于`sum`，输出两个数的乘积最小的。

```typescript
/**
 * 在一个有序数组中查找和为sum的两个数字，如果有多个，则输出乘积最小的。
 * @param {number[]} array 
 * @param {number} sum 
 * @return {number[]}
 */
function FindNumWithSum(array: number[], sum: number): number[] {
    // 因为返回乘积最小的 即和相同，越分散乘积越小，则从两侧开始查找
    // 设置左索引
    let left = 0
    // 设置右索引
    let right = array.length - 1
    while(left < right) {
        let total = array[left] + array[right]
        if (total === sum) {
            return [array[left], array[right]]
        } else if (total < sum) {
            // 和小于目标值，左索引向右移动
            left++
        } else {
            // 和大于目标值，右索引向左移动
            right--
        }
    }
    return []
}
```

### 和为Sum的连续正数序列

> 此部分代码在 FindContinousSequence.ts 中

输入一个正数`S`，打印出所有和为S的连续正数序列。例如，输入`15`，会返回`[[1,2,3,4,5], [4,5,6], [7,8]]`

```typescript
/**
 * 输入一个正数sum，打印出所有和为sum的连续正数序列。
 * @param {number} sum 
 * @return {number[]}
 */
function FindContinousSequence(sum: number): number[] {
    // 存储结果的数组
    let result = []
    // 表示当前的子序列
    let child = [1,2]
    // 子序列的头元素
    let left = 1
    // 子序列的尾元素
    let right = 2
    // 子序列当前总和
    let currentSum = 3
    while (right < sum) {
        while (currentSum < sum && right < sum) {
            child.push(++right)
            currentSum += right
        }
        while (currentSum > sum && left < sum) {
            child.shift()
            currentSum -= left++
        }
        // 当前已经存在和为sum的连续正数序列
        if (currentSum === sum && child.length > 1) {
            result.push(child.slice())
            // 继续向后寻找
            child.push(++right)
            currentSum += right
        }
    }
    return result
}
```



