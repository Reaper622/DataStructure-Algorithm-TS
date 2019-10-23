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



