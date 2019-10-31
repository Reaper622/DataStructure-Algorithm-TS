# 二分查找

二分查找对指定的左索引和右索引的连续序列进行操作，这就是`查找空间`。二分查找通过保持查找空间的左索引、右索引和中间指示符，通过与中间指示符比较，每次讲查找空间缩小为原来的 `1/2`,在剩下的一半上继续查找，直到成功为止。

二分查找一般由三个主要部分组成：

- 预处理——集合未排序，则进行排序
- 二分查找——使用循环或者递归每次比较后将查找空间变为原来的一半
- 后处理——在剩余空间中确定可行的候选者

## 二分查找的实现

> 此部分代码在 BinarySearch.ts 中

给定一个 `n` 个元素有序的（升序）整型数组 `nums` 和一个目标值 `target` ，写一个函数搜索 `nums` 中的 `target`，如果目标值存在返回下标，否则返回 `-1`。

```typescript
/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * @param {number[]} nums 要查询的数组
 * @param {number} target 查找的目标值
 */
function BinarySearch(nums: number[], target: number): number {
    // 定义左索引和右索引和中间指示符
    let low = 0
    let high = nums.length - 1
    let mid = 0;
    // 循环查找
    while (low <= high) {
        mid = Math.floor((low+high)/2)
        if (target === nums[mid]) {
            return mid
        } else if (target > nums[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    // 若找不到 则返回-1
    return -1
}
```

## x的平方根

> 此部分代码在 Sqrt.ts 中

算并返回 *x* 的平方根，其中 *x* 是非负整数。由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

```typescript
/**
 * 计算并返回 x 的平方根（整数)，其中 x 是非负整数。
 * @param {number} x 
 * @return {number}
 */
function Sqrt(x: number): number {
  // 考虑到特殊情况 0 把左边界定义到0
  let left = 0
  let right = Math.ceil(x/2)
  while(left < right) {
    // 取右中位数 防止进入死循环
    let mid = Math.ceil(left + (right - left)/2)
    let num = mid*mid
    if (num > x) {
      right = mid - 1
    } else {
      left = mid
    }
  }
  // 停止循环时 left 即为平方根的整数部分
  return left
}
```

## 搜索旋转排序数组

> 此部分代码在 GetIndexFromRotateArray.ts

假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 *O*(log *n*) 级别。

```typescript
/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * @param {number[]} array 
 * @param {number} target 
 */
function GetIndexFromRotateArray(array: number[], target: number): number {
  let left = 0
  let right = array.length - 1
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2)
    // 当 left - mid 为有序时，且target不在此有序部分时，向后寻找
    if (array[0] <= array[mid] && (target > array[mid] || target < array[0])) {
      left = mid + 1
    // 当 left - mid 不有序时， 且target不在此部分时，向后寻找
    } else if (target > array[mid] && target < array[0] ) {
      left = mid + 1
    // 其他情况均向前寻找
    } else {
      right = mid
    }
  }
  return left === right && array[left] === target ? left : -1
}
```

