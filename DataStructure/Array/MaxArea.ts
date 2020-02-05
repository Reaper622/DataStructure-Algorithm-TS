/**
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height: number[]): number {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    // 循环计算容器的存水多少
    while(left < right) {
        // 存水的高度是由较短一侧的高度确定的
        let side = Math.min(height[left], height[right]);
        let len = right - left;
        // 计算容积
        let volume = side * len;
        result = volume > result ? volume : result;
        // 变化较小侧来寻找最大的容积
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;
};

export {maxArea}