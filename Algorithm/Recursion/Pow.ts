
/**
 * 实现求幂的功能
 * @param {number} x 
 * @param {number} n 
 */
function Pow(x: number, n: number): number {
    // 对特殊情况和边界进行处理
    if (n === 0) {
        return 1
    } else if (n === 1) {
        return x
    }
    // 如果指数为负数
    if (n < 0) {
        if (x === 0) {
            throw new Error('0不能求倒数')
        } else {
            x = 1/x
            n = -n
        }   
    }

    if (n % 2 === 0) {
        return Pow(x*x, n/2)
    } else {
        return Pow(x*x, Math.floor(n/2))*x
    }
}

export {Pow}