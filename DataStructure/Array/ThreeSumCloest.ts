/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums: number[], target: number): number {
    if (nums.length < 3) {
        return null;
    }
    // 排序nums数组
    nums.sort((a,b) => (a-b));
    let abs = Number.MAX_VALUE;
    let result = 0;
    const len = nums.length;
    for(let i = 0; i < len - 2;i++) {
        // 去除重复项
        if (i && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            let newResult = nums[i] + nums[left] + nums[right];
            let newAbs = Math.abs(newResult - target);
            // 如果差值比当前最小差值小 就替换为此时的值
            if (newAbs < abs) {
                abs = newAbs;
                result = newResult;
            }
            if (newResult - target < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
    
};

export {threeSumClosest}