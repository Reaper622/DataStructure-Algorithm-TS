---
sidebar: auto
---
# 排序

## 插入排序
> 此部分代码在 InsertSort.ts 中

- 空间复杂度: `O(1)`
- 时间复杂度: `O(n^2)`

将左侧序列看为一个有序的序列，每次都将要插入的数字插入到合适的位置。插入时，从有序序列的最右侧开始比较，若比较的数较大，比较的数后移一位，要插入的数继续向前比较知道找到要插入的位置。

```typescript
function InsertSort(array: number[]): number[] {
    // 从第二位开始，默认第一位为有序序列了
    for(let i = 1; i < array.length;i++) {
        // 此时要插入的位置
        let target = i
        for(let j = i - 1; j >= 0; j--) {
            if (array[target] < array[j]) {
                [array[target], array[j]] = [array[j], array[target]]
                target = j
            } else {
                break
            }
        }
    }

    return array
}
```



## 冒泡排序

> 此部分代码在 BubbleSort.ts 中

- 空间复杂度: `O(1)`
- 时间复杂度: `O(n^2)`

循环数组，依次比较当前元素和下一个元素，如果当前元素更大，向上冒泡,直到没有比他大的，停止冒泡，此轮冒泡结束。
每冒泡一次，下次需要遍历冒泡的数组的长度便可减一。

```typescript
function BubbleSort(array: number[]): number[] {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    return array
}
```

### 优化的冒泡排序

还是循环数组，但此时定义一个变量用来确定下一次遍历的终点即为上一次发生转换的点「即后面的点没有变化说明已经排好序」可以避免一些重复的遍历。

```typescript
/**
 * 冒泡排序，使用循环数组的方法，比较当前元素和下一个元素，如果当前元素大，向上冒泡
 * 同时确定下次遍历的终点，避免不需要的的遍历
 * 
 * @param {number[]} array 
 * @return {number[]}
 */
function BubbleSortBetter(array: number[]):number[] {
    let i = array.length - 1;

    while(i > 0) {
        // 定义发生变化位置 即下一次遍历起始位置
        let position = 0;
        for(let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                // 定义发生变化的位置 确定下一次变化的重点位置
                position = j;
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
        // 定义下一次遍历的重点，避免重复遍历
        i = position;
    }
    return array;
}
```

## 选择排序

> 此部分代码在 SelectSort.ts 中

- 空间复杂度：`O(1)`
- 时间复杂度：`O(n^2)`

每次循环都找到一个最小的值放在最前面有序序列中，没找到一个下次循环的序列长度就向后减一即可。

```typescript
/**
 * 选择排序，每次循环找到一个最小的数放在前面的有序队列中
 * @param {number[]} array 
 * @return {number[]}
 */
function SelectSort(array: number[]): number[] {
    for(let i = 0; i < array.length; i++) {
        let minIndex = i
        for(let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
    return array
}
```

## 快速排序

> 此部分代码在 QuickSort.ts 中

- 空间复杂度：`O(logn)`
- 时间复杂度：`O(n^2)`

一趟排序将要排序的数据分割成独立的两部分，之后递归排序分割出的两部分，完成排序。

```typescript
/**
 * 快速排序，单独开辟两个存储空间，左边存放比中介值小的，右边存放比中介值大的
 * 递归排序
 * 
 * @param {number[]} array
 * @return {number[]}
 */
function QuickSort (array: number[]): number[] {
    // 递归的终点判断
    if (array.length < 2) {
        return array
    }
    // 快排的中介值
    let target = array[0]
    // 小于中介值的数组
    let left = []
    // 大于中介值的数组
    let right = []
    for(let i = 1; i < array.length; i++) {
        if (array[i] < target) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }

    return QuickSort(left).concat([target], QuickSort(right))
}
```

## 快速排序II

> 此部分代码在 QuickSort.ts 中

- 时间复杂度：`O(nlogn)`
- 空间复杂度：`O(logn)`

快速排序，使用索引记录的方法，不需要额外空间

记录一个索引`l`从数组最左侧开始，记录一个索引`r`从数组右侧开始

在`l的条件下，找到右侧小于`target`的值`array[r]`，并将其赋值到`array[l]

在`l的条件下，找到左侧大于`target`的值`array[l]`，并将其赋值到`array[r]

这样让`l=r`时，左侧的值全部小于`target`，右侧的值全部小于`target`，将`target`放到该位置

```typescript
/**
 * 快速排序，使用索引记录的方法，不需要额外空间
 * 递归排序
 * 
 * @param {number[]} array 
 * @param {number} start 
 * @param {number} end 
 * @return {number[] | null}
 */
function QuickSort2(array: number[], start:number, end: number): number[] | null {
    // 当要排序段为0
    if (end - start < 1) {
        return null
    }
    // 选择中介值 即第一个值
    const target = array[start]
    // 左、右索引
    let l = start
    let r = end
    while(l < r) {
        // 先从后向前找小于中介值的结点
        while(l < r && array[r] >= target) {
            r--
        }
        // 交换位置
        if (l < r) {
            array[l++] = array[r]
        }
        // 从前向后找大于中介值的结点
        while(l < r && array[l] < target) {
            l++
        }
        // 交换位置
        if (l < r) {
            array[r--] = array[l]
        }
    }
    // 当结束时 l = r 此时此处即为中介值位置
    array[l] = target
    // 之后递归排序左边和右边数组
    QuickSort2(array, start, l - 1)
    QuickSort2(array, l + 1, end)
    return array
 }
```

## 归并排序

> 此部分代码在 MergeSort.ts 中

- 时间复杂度: `O(nlogn)`
- 空间复杂度: `O(n)

归并排序一般分为两步：分离和合并

- 分离：将数组从中点进行分割，分为左、右两个数组，之后递归分割直到长度小于2
- 合并：合并时创建一个临时数组，比较两数组「此时数组均已有序」第一个元素的大小，将较小的插入临时数组，之后直到一方为空，将另一个不为空的数组全部插入临时数组。

```typescript
/**
 * 归并排序，将数组分割成前后两个数组，之后递归分割直到数组长度小于2，进行归并
 * @param {number[]} array 
 * @return {number[]}
 */
function MergeSort(array: number[]): number[] {
    if (array.length < 2) {
        return array
    }
    // 获取中点
    const mid = Math.floor(array.length / 2)
    // 前半段和后半段
    let front = array.slice(0, mid)
    let end = array.slice(mid)
    return merge(MergeSort(front), MergeSort(end))
}

/**
 * 归并操作
 * @param {number[]} front 
 * @param {number[]} end 
 */
function merge(front: number[], end: number[]): number[] {
    // 创建一个临时存储数组
    const temp = []
    while(front.length && end.length) {
        // 比较两数组第一个元素,将较小的元素加入临时数组
        if (front[0] < end[0]) {
            temp.push(front.shift())
        } else {
            temp.push(end.shift())
        }
    }
    // 若左右数组有一个为空，那么此时另一个数组一定大于temp中的所有元素，直接将所哟元素加入temp
    while(front.length) {
        temp.push(front.shift())
    }
    while(end.length) {
        temp.push(end.shift())
    }

    return temp
}
```



## 堆排序

> 此部分代码在 HeapSort.ts 中

- 时间复杂度：`O(nlogn)`
- 空间复杂度：`O(1)`

根据传入堆的类型来返回排序数组，大顶堆对应从大到小，小顶堆对应从小到大。
```typescript
/**
 * 根据传入堆的类型来返回排序数组
 * 大顶堆对应从大到小
 * 小顶堆对应从小到大
 * 
 * @param {number[]} array 
 * @param {string} type 
 */
function HeapSort(array: number[], type: string): number[] {
    const len = array.length
    let heap = new Heap(type)
    heap.create(array)
    let result = []
    for(let i = 0; i < len; i++) {
        result.push(heap.pop())
    }
    return result
}
```

