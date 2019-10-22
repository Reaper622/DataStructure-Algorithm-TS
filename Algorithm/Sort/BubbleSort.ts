
/**
 * 冒泡排序，使用循环数组的方法，比较当前元素和下一个元素，如果当前元素大，向上冒泡
 * 
 * @param {number[]} array 
 * @return {number[]}
 */
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

export default BubbleSort