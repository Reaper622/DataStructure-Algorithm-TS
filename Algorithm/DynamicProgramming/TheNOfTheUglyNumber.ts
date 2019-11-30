
/**
 * 编写一个程序，找出第 n 个丑数。
 * 丑数就是只包含质因数 2, 3, 5 的正整数。
 * @param {number} n 
 * @return {number}
 */
function TheNOfTheUglyNumber(n: number): number {
    if (n <= 0) {
        return 0;
    }
    // 定义一个存储丑数的数组，默认1为第一个丑数字
    let uglyNumbers = [1];
    // 记录下一个丑数的索引值
    let nextUglyIndex = 1;
    // 因为丑数就是比他小的丑数的2倍或者3倍或者5倍
    // 定义丑数的2倍索引、3倍索引和5倍索引
    let ugly2 = 0,ugly3 = 0, ugly5 = 0;
    // 当下一个索引值小于n时
    while (nextUglyIndex < n) {
        // 取2倍序列、3倍序列和5倍序列中的最小值
        let min = Math.min(uglyNumbers[ugly2] * 2, uglyNumbers[ugly3] * 3, uglyNumbers[ugly5] * 5);
        uglyNumbers[nextUglyIndex] = min;
        // 移动索引值
        while (uglyNumbers[ugly2] * 2 <= min)
            ugly2++
        while (uglyNumbers[ugly3] * 3 <= min)
            ugly3++
        while (uglyNumbers[ugly5] * 5 <= min)
            ugly5++
        nextUglyIndex++;
    }
    // 循环结束时，此时nextUglyIndex = n, 索引为 n-1 的丑数即为第n个丑数
    return uglyNumbers[nextUglyIndex - 1];
}

export {TheNOfTheUglyNumber}