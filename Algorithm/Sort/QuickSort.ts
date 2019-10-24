

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
    // 递归返回拼接数组
    return QuickSort(left).concat([target], QuickSort(right))
}

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
        // 先从后向前找小于中介值的节点
        while(l < r && array[r] >= target) {
            r--
        }
        // 交换位置
        if (l < r) {
            array[l++] = array[r]
        }
        // 从前向后找大于中介值的节点
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


export {QuickSort, QuickSort2}