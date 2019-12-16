
/**
 * 位运算实现加法。异或之后通过与运算获取进位进位一位后递归求和，直到无进位。
 * @param {number} num1 
 * @param {number} num2 
 * @return {number}
 */
function plus (num1: number, num2: number): number {
    if (num2 === 0) {
        return num1;
    }
    // 取两者的 异或 即和 （不含进位）
    let sum = num1 ^ num2;
    // 取二者的进位 向左移动一位
    let carry = (num1 & num2) << 1;
    return plus (sum, carry);
}

/**
 * 计算机内，减法被转化为加上该数的负数，即我们也以加法实现。
 * @param {number} num1 
 * @param {number} num2 
 * @return {number}
 */
function minus(num1: number, num2: number): number {
    // 我们通过求补码算出该数的负数, 取反 + 1 即为 补码
    let subtractor = plus(~num2, 1);
    // num1 + num2补码 即为 num1 - num2
    return plus(num1, subtractor);
}

/**
 * 在已经实现加法的情况下，乘法直接为我们被乘数 加上乘数倍的自己即可，但要考虑负数的情况。
 * 我们可以先通过计算绝对值的乘数结果，之后根据符号位结果确定最终符号即可。
 * @param {number} num1 
 * @param {number} num2 
 * @return {number}
 */
function multiply(num1: number, num2: number): number {
    // 取绝对值
    let num1Abs = num1 < 0 ? plus(~num1, 1) : num1;
    let num2Abs = num2 < 0 ? plus(~num2, 1) : num2;
    // 计算绝对值的乘积
    // 记录循环次数
    let count = 0;
    // 最终结果
    let result = 0;
    while (count < num2Abs) {
        result = plus(result, num1Abs);
        count = plus(count, 1);
    }
    // 确定最终结果的符号
    if ((num1 ^ num2) < 0) {
        result = plus(~result, 1);
    }
    return result;
}

/**
 * 除法运算即可以看做被除数一直减去除数直到被除数小于除数为止，此时进行减法的次数就是商，而剩余的被除数就是余数。
 * 同样，除法也要注意符号问题，我们和乘法对于符号的解决方法相同。
 * @param {number} num1 
 * @param {number} num2 
 * @return {number}
 */
function divide(num1: number, num2: number): number {
    //先求被除数和除数的绝对值
    let num1abs = num1 < 0 ? plus(~num1, 1) : num1;
    let num2abs = num2 < 0 ? plus(~num2, 1) : num2;
    // 记录循环次数
    let count = 0;
    let result = num1abs;
    while (result >= num2abs) {
        result = minus(result, num2abs);
        count = plus(count, 1);
    }
    // 循环次数即为商
    return count;
}

export {plus, minus, multiply, divide}