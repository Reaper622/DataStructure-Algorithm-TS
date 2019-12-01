/**
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

export {GetNumberOfK}