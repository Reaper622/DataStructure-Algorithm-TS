
/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示。
 * 输入为非空字符串且只包含数字 1 和 0。
 * @param {string} a 
 * @param {string} b 
 * @return {string}
 */
function SumBinary (a: string, b: string):string {
    let arrA = a.split('')
    let arrB = b.split('')
    // 补齐两个数组的长度
    const len = Math.max(arrA.length, arrB.length) + 1
    // 用'0'填充两个数组
    while(arrA.length < len) {
        arrA.unshift('0')
    } 
    while(arrB.length < len) {
        arrB.unshift('0')
    }
    // 存储结果
    let result = []
    for(let i = len-1; i > 0; i--) {
        result[i] = result[i] ? result[i] + parseInt(arrA[i]) + parseInt(arrB[i]) : parseInt(arrA[i]) + parseInt(arrB[i])
        // 进位操作
        if (result[i] > 1) {
            result[i - 1] = result[i - 1] ? result[i - 1] + 1 : 1
            result[i] = result[i] % 2
        }
    }
    if (!result[0]) {
        result.shift()
    }
    return result.join('')
}

export {SumBinary}