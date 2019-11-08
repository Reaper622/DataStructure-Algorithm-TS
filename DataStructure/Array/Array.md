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

## N数之和问题

> 主要考虑如何相比于暴力解法降低时间复杂度。

### 两数之和

> 此部分代码在 SumTwoNumbers.ts 中

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

```typescript
/**
 * 给定一个整数数组 arr 和一个目标值 target，在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 * 
 * @param {number[]} arr 
 * @param {number} target 
 * @return {number[]}
 */
function SumTwoNumbers (arr: number[], target: number ):number[]  {
  let len:number = arr.length;
  let result: number[] = [];
  for(let i = 0; i < len-1; i++) {
    for(let j = i+1; j < len; j++){
      if(arr[i] + arr[j] === target) {
        result.push(i,j);
      }
    }
  }
  return result;
}
```

### 三数之和

> 此部分代码在 SumThreeNumbers.ts 中

给定一个包含 n 个整数的数组 arr，判断 arr 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

```typescript
/**
 * 给定一个包含n个整数的数组，找出其中和为0的不重复的三元组
 * @param {number[]} arr 
 * @return {number[]}
 */
function SumThreeNumbers (arr: number[]): number[][] {
    // 存储结果
    const result = []
    // 首先进行排序，便于去重
    arr.sort((a,b) => a-b)
    for(let i = 0; i < arr.length; i++) {
        // 跳过重复
        if (i && arr[i] === arr [i - 1]) {
            continue
        }
        // 从此位向后为寻找数组 找到 left 和 right 索引加上 i 位为 所求目标值
        let left = i + 1
        let right = arr.length - 1
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right]
            // 大于0 右变量向左移动
            if(sum > 0) {
                right--
            }
            // 小于0 左变量向右移动
            else if (sum < 0) {
                left++
            }
            // 符合条件存储结果
            else {
                result.push([arr[i], arr[left], arr[right]])
                left++
                right--
                // 跳过重复值
                while(arr[left] === arr[left - 1]) {
                    left++
                }
                while(arr[right] === arr[right + 1]) {
                    right--
                }
            }
        }
    }
    return result
}
```

### 四数之和

> 此部分代码在 SumFourNumbers.ts

给定一个包含 n 个整数的数组 arr 和一个目标值 target，判断 arr 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

```typescript
/**
 * 给定一个包含 n 个整数的数组 arr 和一个目标值 target，
 * 判断 arr 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * @param {number[]} arr 
 * @param {number} target 
 */
function SumFourNumbers(arr: number[], target: number): number[][] {
        // 存储结果
        const result = []
        if (arr.length < 4) {
            return result
        }
        // 排序，便于去重
        arr.sort((a,b) => a-b)
        for(let i = 0; i < arr.length - 3; i++) {
            // 跳过重复
            if (i > 0 && arr[i] === arr[i - 1]) {
                continue
            }
            // 如果当前连续四个已经超过目标值 则后面已无符合条件的子序列，直接退出循环
            if (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] > target) {
                break
            }
            // 下部分类似于三数之和
            for(let j = i + 1; j < arr.length - 2; j++) {
                // 去除重复情况
                if (j > i + 1 && arr[j] === arr[j - 1]) {
                    continue
                }
                let left = j + 1
                let right = arr.length - 1
                while (left < right) {
                    let sum = arr[i] + arr[j] + arr[left] + arr[right]
                    if (sum === target) {
                        result.push([arr[i], arr[j], arr[left], arr[right]])
                    } 
                    if (sum <= target) {
                        while (arr[left] === arr[++left]);
                    } else {
                        while (arr[right] === arr[--right]);
                    }
                }
            }
        }
        return result
}
```

