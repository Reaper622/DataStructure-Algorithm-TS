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

export default SelectSort