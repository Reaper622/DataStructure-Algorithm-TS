
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

export {BubbleSort, BubbleSortBetter}