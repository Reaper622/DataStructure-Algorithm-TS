
/**
 * 将0移动到数组后部，同时内部不为0的元素相对位置不变。
 * @param {number[]} nums
 * @return {number[]} 
 */
function MoveZero (nums: number[]): number[] {
    let len = nums.length
    // 使用双指针法
    let i = 0, j = 0
    while (i < len) {
        // 非零元素提前放入
        if (nums[i] !== 0) {
            nums[j++] = nums[i]
        }
        i++
    }
    // 填充剩余的0
    while(j < len) {
        nums[j++] = 0
    }
    return nums
}

export {MoveZero}