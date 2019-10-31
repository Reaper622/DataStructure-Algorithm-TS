
/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * @param {number[]} nums 要查询的数组
 * @param {number} target 查找的目标值
 */
function BinarySearch(nums: number[], target: number): number {
    // 定义左索引和右索引和中间指示符
    let low = 0
    let high = nums.length - 1
    let mid = 0;
    // 循环查找
    while (low <= high) {
        // 防止 low + high 过大
        mid = low + Math.floor((high - low)/2)
        if (target === nums[mid]) {
            return mid
        } else if (target > nums[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    // 若找不到 则返回-1
    return -1
}

export {BinarySearch}