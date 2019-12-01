
/**
 * 找到一个数组中只出现一次的数字。若不存在则返回-1
 * @param {number[]} numbers 
 * @return {number}
 */
function FindNumberAppearOnce(numbers: number[]): number {
    if (!numbers || numbers.length < 2) {
        return -1;
    }
    // 对所有数字进行异或的结果
    let resultOR = 0;
    let len = numbers.length;
    // 依次进行异或操作，因为除一个数字之外其他数字均为两个，所以异或结果位为1的地方即为单个数字位也为1的地方
    for(let i = 0; i < len; i++) {
        resultOR =  resultOR^numbers[i];
    }
    // 返回结果 即为只出现一次的数字
    return resultOR;
}

export {FindNumberAppearOnce}
