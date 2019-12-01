sidebar: auto

# 二分查找

二分查找对指定的左索引和右索引的**连续序列**进行操作，这就是`查找空间`。二分查找通过保持查找空间的左索引、右索引和中间指示符，通过与中间指示符比较，每次讲查找空间缩小为原来的 `1/2`,在剩下的一半上继续查找，直到成功为止。一般遇到要在一个排序的数组中进行统计或查找时，我们可以使用二分算法。

二分查找一般由三个主要部分组成：

- 预处理——集合未排序，则进行排序
- 二分查找——使用循环或者递归每次比较后将查找空间变为原来的一半
- 后处理——在剩余空间中确定可行的候选者

## 二分查找的类型

一般地二分查找有三种模板类型：

类型一：

```javascript
// 预处理....
left = 0, right = length - 1
while(left <= right) {
	mid = left + (right - left)/2
	if (nums[mid] === target) {
		return mid
	} else if (nums[mid] < target) {
    left = mid + 1
  } else {
    right = mid - 1
  }
}
// 不需要后处理
```

`left <= right`

- 二分查找的基础形式。
- 查找条件可以不和元素的左右两侧进行比较进行确定「例如找特定值」
- 不需要进行后处理，因为每一步都在寻找特定值，若执行到末尾，证明无次值。

类型二:

```JavaScript
// 预处理...
left = 0, right = length
while (left < right) {
  mid = left + (right - left) / 2
  if (nums[mid] < target) {
    left = mid + 1
  } else {
    right = mid
  }
}
// left === right
// 还有一种待处理情况
// 进行后处理
```

`left < right`

- 需要访问元素的直接右邻居。
- 需要根据元素的右邻居来判断使用左子序列还是右子序列。
- 保证查找空间中至少存在两个元素。
- 需要进行后处理的情况：剩下一个元素时，循环 / 递归结束，判断此元素是否符合条件。

类型三:

```javascript
// 预处理...
left = 0, right = length - 1
while (left + 1 < right) {
  mid = left + (right - left) / 2
  if (nums[mid] < target) {
    left = mid
  } else {
    right = mid
  }
}
// left + 1 === right
// 两种待处理情况
// 后处理.....
```

`left + 1 < right`

- 需要访问元素的左右邻居。
- 根据元素的邻居判定使用左子序列还是右子序列。
- 保证查找空间中至少存在三个元素。
- 需要进行后处理的情况：剩下两个元素时，循环/递归结束。需要判断剩余元素是否符合条件。

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

## 寻找峰值

> 此部分代码在 FindPeakElement.ts 中

峰值元素是指其值大于左右相邻值的元素。

给定一个输入数组 `nums`，其中 `nums[i] ≠ nums[i+1]`，找到峰值元素并返回其索引。

数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

你可以假设 `nums[-1] = nums[n] = -∞`。

```typescript
/**
 * 寻找数组中的峰值，峰值即是其值大于左右相邻值的元素
 * 数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可
 * @param {number[]} nums 
 * @return {number}
 */
function FindPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1
  while (left < right) {
    let mid = Math.floor(left + (right - left)/2)
    // 证明峰值在左边
    if (nums[mid] > nums[mid+1]) {
      right = mid
    } 
    // 反之则认为峰值在右边
    else {
      left = mid+1
    }
  }
  return left
}
```

## 寻找旋转排序数组中的最小值

> 此部分代码在 FindMinInRotateArray.ts 中

假设按照升序排序的数组在预先未知的某个点上进行了旋转。找出其中最小的元素。

如果 `nums[right] < nums[mid]`我们就认为旋转点在中间值的右方

如果`nums[right] > nums[mid]`我们就认为旋转点此时已经在中间值的左方

循环直到 left = right 即为旋转点也就是原数组第一位「最小值」所在位置。

```typescript
/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 找出其中最小的元素
 * @param {number[]} nums 
 * @return {number}
 */
function FindMinInRotateArray(nums: number[]): number {
	let left = 0
	let right = nums.length - 1
	while (left < right) {
		let mid = Math.floor(left + (right - left)/2)
		// 如果最右侧比中间值小 则认为旋转点在右边
		if (nums[right] < nums[mid]) {
			left = mid + 1
		} 
		// 否则 认为旋转点在左边
		else {
			right = mid
		}
	}
	return nums[left]
}
```

## 在排序数组中查找元素的第一个和最后一个位置

> 此部分代码在 SearchRange.ts 中

给定一个按照升序排列的整数数组 `nums`，和一个目标值 `target`。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值，返回 `[-1, -1]`。

```typescript
/**
 * 在排序数组中查找元素的第一个和最后一个位置 返回一个数组[FirstIndex, LastIndex] 
 * 若不存在该值，则返回[-1, -1]
 * 
 * @param {number[]} nums 
 * @param {number} target 
 */
function SearchRange (nums: number[], target: number): number[] {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let mid = Math.floor(left + (right - left)/2)
        // 如果找到了该值 则继续查找范围
        if (nums[mid] === target) {
            let midLeft = mid
            let midRight = mid
            while (nums[midLeft - 1] === target) {
                midLeft--
            }
            while (nums[midRight + 1] === target) {
                midRight++
            }
            return [midLeft, midRight]
        } else if (nums[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    // 判断是否存在该值
    return  nums[left] === target ? [left, left] : [-1, -1]
}
```

## 找到K个最接近的元素

> 此部分代码在 FindClosestElements.ts 中

给定一个排序好的数组，两个整数 `k` 和 `x`，从数组中找到最靠近 `x`（两数之差最小）的 `k` 个数。返回的结果必须要是按升序排好的。如果有两个数与 `x` 的差值一样，优先选择数值较小的那个数。

```typescript
/**
 * 给定一个排序好的数组，两个整数 k 和 x，
 * 从数组中找到最靠近 x（两数之差最小）的 k 个数。
 * 返回的结果必须要是按升序排好的。
 * 如果有两个数与 x 的差值一样，优先选择数值较小的那个数。
 * 
 * @param {number[]} arr 
 * @param {number} k 
 * @param {number} x 
 */
function FindClosestElements (arr:number[], k:number, x:number) {
    let left = 0
    let right = arr.length -1
    let mid
    while (left < right) {
        mid = Math.floor(left + (right - left)/2)
        // 若找到数组中确有此值 跳出循环
        if (arr[mid] === x) {
            k--
            break
        } 
      	// 若数组中不存在 找到离他最近的数 跳出循环
        else if (arr[mid] < x && arr[mid + 1] > x) {
            x - arr[mid] > arr[mid+1] - x ? mid = mid + 1 : mid = mid
            k--
            break
        }
        else if (arr[mid] < x) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    // 目标在数组内
    if (left !== right) {
        let pointerL = mid
        let pointerR = mid
        while (k > 0) {
            if (x - arr [pointerL-1] <= arr[pointerR+1] - x) {
                if (pointerL > 0) {
                pointerL--
                k--
                } else if ( k > 0 && pointerR < arr.length - 1) {
                pointerR++
                k--
                }
            } else {
                if ( k > 0 && pointerR < arr.length - 1) {
                pointerR++
                k--
                } else if (pointerL > 0) {
                pointerL--
                k--
                }
            }
        }
        return arr.slice(pointerL, pointerR + 1)
    }
    else {
        // 如果目标在左边界以外
        if (left === 0) {
            return arr.slice(0, k)
        } 
        // 如果目标在右边界以外
        else {
            return arr.slice(arr.length - k)
        }
    }
}
```

## 寻找比目标字母大的最小字母

> 此部分代码在 NextGreatestLetter.ts 中

给定一个只包含小写字母的有序数组`letters` 和一个目标字母 `target`，寻找有序数组里面比目标字母大的最小字母。

数组里字母的顺序是循环的。

```typescript
/**
 * 给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。
 * 数组里字母的顺序是循环的
 * 
 * @param {string[]} letters 
 * @param {string} target 
 * @return {string}
 */
function NextGreatestLetter (letters: string[], target: string): string {
    let left = 0
    let right = letters.length - 1
    while (left < right) {
        let mid = Math.floor(left + (right - left)/2)
        // 如果找到了该字符并且下一位不重复
        if (letters[mid] === target && letters[mid + 1] !== target) {
            return letters[mid + 1]
        } else if (letters[mid] > target) {
            right = mid 
        } else {
            left = mid + 1
        }
    }
    // 如果边界处大于目标值
    if (letters[left] > target) {
        return letters[left]
    }
    // 否则 根据循环处理 返回第一个
    else {
        return letters[0]
    }
}
```

## 数字在排序数组中出现的次数

> 此部分代码在 NumberOfK.ts中

统计一个数字在排序数组中出现的次数，因为是排序数组，我们可以利用二分算法来查找特定的值来优化时间复杂度，因此我们可以分别去找到`k`的**第一个出现的位置**和**最后一个出现的位置**，之后两个位置相互减去得到出现的次数。

```typescript
**
 * 统计一个数字在排序数组中出现的次数。
 * @param {number[]} numbers 
 * @param {number} k 
 * @return {number}
 */
function GetNumberOfK(numbers: number[], k: number): number {
    if (!numbers || numbers.length === 0) {
        return 0;
    }
    let first = GetFirstK(numbers, k);
    let last = GetLastK(numbers, k);
    if (first !== -1 && last !== -1) {
        return last - first + 1;
    } else {
        return 0;
    }
}
/**
 * 统计一个数字在排序数组中的第一个位置的索引，若不存在，则返回-1。
 * @param {number[]} numbers 
 * @param {number} k 
 * @return {number}
 */
function GetFirstK(numbers: number[], k: number): number {
    if (!numbers || numbers.length === 0) {
        return -1;
    }
    let left = 0;
    let right = numbers.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left)/2);
        // 如果中间值就为k， 判断k是否为第一个k值
        if (numbers[mid] === k) {
            // 判断是否为第一个k值 若是直接返回索引
            if ((mid > 0 && numbers[mid - 1] !== k) || mid === 0) {
                return mid;
            } 
            // 若不是 则第一个k在左半段
            else {
                right = mid - 1;
            }
        } else if (numbers[mid] > k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    // 如果没找到 返回-1
    return -1;
}
/**
 * 统计一个数字在排序数组中的最后一个位置，若不存在则返回-1。
 * @param {number[]} numbers 
 * @param {number} k 
 * @return {number}
 */
function GetLastK(numbers: number[], k: number): number {
    if (!numbers || numbers.length === 0) {
        return -1;
    }
    let len = numbers.length;
    let left = 0;
    let right = len - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left)/2);
        if (numbers[mid] === k) {
            // 判断是否为最后一个k
            if ((mid < len - 1 && numbers[mid + 1] !== k) || mid === len - 1) {
                return mid;
            } 
            // 若不是最后一个k则继续往后找
            else {
                left = mid + 1;
            }
        } else if (numbers[mid] < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }  
    }
    // 如果没找到 返回-1
    return -1;
}
```

