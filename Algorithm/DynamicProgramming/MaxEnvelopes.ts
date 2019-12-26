/**
 * 给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
 * 请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
 * @param {number[][]} envelopes
 * @return {number}
 */
function maxEnvelopes (envelopes: number[][]):number {
    if (!Array.isArray(envelopes) || envelopes.length < 1 ) {
        return 0;
    }
    // 首先对于宽度按升序排序，之后对于相同宽度则按照降序排序，因为两个宽度相同的信封不能相互包含，逆序保证在宽度相同的数对中最多选择一个
    envelopes.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    // 之后就是一个根据高度寻找最长递增序列的问题
    let height = [];
    // 使用二分查找找到高度中和合适值
    for(let i in envelopes) {
        height[i] = envelopes[i][1];
    }
    return HeightLTS(height);
};

/**
 * 传入一个数组，对这个数组寻找最大连续增大序列的长度。
 * @param  {number[]} height 
 * @return {number}
 */
function HeightLTS(height: number[]): number {
    let count = 0,
        len = height.length,
        queue = [];
    for(let i = 0; i < len; i++) {
        let env = height[i];
        let left = 0,
            right = count;
        // 寻找插入此信封的位置
        while (left < right) {
            let mid = left + Math.floor((right -left) / 2);
            if (queue[mid] >= env) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        // 增加一个信封
        if (left === count) count++;
        // 把这个信封添加到队列
        queue[left] = env;
    }
    return count;
}

export {maxEnvelopes}