/**
 * 在两个有序数组中寻找中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1: number[], nums2: number[]) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    // 奇偶不确定 我们使用分别找到 (len1 + len2 + 1) / 2 个 和 (len1 + len2 + 2) / 2 个的情况，获得其平均数
    // 如果是 奇数 则两个数相等， 如果为偶数则为两个数 [整数情况]
    let left = Math.floor((len1 + len2 + 1) / 2)
    let right = Math.floor((len1 + len2 + 2) / 2)
    return (findHelper(nums1, 0, nums2, 0, left) + findHelper(nums1, 0, nums2, 0, right)) / 2.0;
};

/**
 * 从两个有序数组的指定位置开始寻找目标数
 * @param {number[]} nums1
 * @param {number} i
 * @param {number[]} nums2
 * @param {number} j
 * @param {number} target
 * @return {number}
 */
var findHelper = function (nums1: number[], i: number, nums2: number[], j: number, target: number) {
    // 如果指定的索引超过了某个数组的长度 则直接从数另一个数组中返回
    if (i >= nums1.length) return nums2[j + target - 1];
    if (j >= nums2.length) return nums1[i + target - 1];
    // 如果所找为1 则只是求数组2第一项和数组1第一项哪个小
    if (target === 1) {
        return nums1[i] <= nums2[j] ? nums1[i] : nums2[j];
    }
    // 使用二分法 对 target 二分 找到每个数组中的  target / 2 个数字
    // 求两个数组对应的中位数 查看对应索引是否已经超过数组长度
    let mid1 = (i + target / 2 - 1 < nums1.length) ? nums1[i + Math.floor(target / 2 ) - 1] : Number.MAX_VALUE
    let mid2 = (j + target / 2 - 1 < nums2.length) ? nums2[j + Math.floor(target / 2 ) - 1] : Number.MAX_VALUE
    if (mid1 < mid2) {
        return findHelper(nums1, i +  Math.floor(target / 2), nums2, j,  target - Math.floor(target/2))
    } else {
        return findHelper(nums1, i, nums2, j +  Math.floor(target / 2),  target - Math.floor(target/2))
    }
}

export {findMedianSortedArrays}