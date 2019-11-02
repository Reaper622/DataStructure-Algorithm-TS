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

export {SearchRange}