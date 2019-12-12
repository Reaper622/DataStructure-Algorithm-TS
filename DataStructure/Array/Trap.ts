/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * @param {number[]} height 
 * @return {number}
 */
function trap(height: number[]): number {
    if (!Array.isArray(height)) {
        return 0;
    }
    // 定义左右指针
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    // 定义左右最高处
    let left_max = 0,
        right_max = 0;
    while(left < right) {
        // 左侧较低
        if (height[left] < height[right]) {
            // 判断左侧是否有较高的，可以形成凹形接水
            height[left] >= left_max ? left_max = height[left] : result += (left_max - height[left]);
            ++left;
        }
        // 右侧较低
        else {
            // 判断右侧是否有较高的，可以形成凹形接水
            height[right] >= right_max ? right_max = height[right] : result += (right_max - height[right]);
            --right;
        }
    }
    return result;
}

export {trap}