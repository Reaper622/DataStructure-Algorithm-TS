/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p1 = 0;
    let p2 = 0;
    let len = nums.length;
    while(p2 < len) {
        // 排除重复项
        while(nums[p2] === nums[p1]) {
            p2++;
        }
        // 此时只保留 p1 位置的重复项
        p1++;
        // 此时从下一项开始
        nums[p1] = nums[p2];
    }
    // 返回不重复的个数
    return p1;
};

export {removeDuplicates}