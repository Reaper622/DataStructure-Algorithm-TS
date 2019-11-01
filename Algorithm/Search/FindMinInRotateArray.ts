
/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 找出其中最小的元素
 * @param {number[]} nums 
 * @return {number}
 */
function FindMinInRotateArray(nums: number[]): number {
	let left = 0
	let right = nums.length - 1
	while (left < right) {
		let mid = Math.floor(left + (right - left)/2)
		// 如果最右侧比中间值小 则认为旋转点在右边
		if (nums[right] < nums[mid]) {
			left = mid + 1
		} 
		// 否则 认为旋转点在左边
		else {
			right = mid
		}
	}
	return nums[left]
}

export {FindMinInRotateArray}