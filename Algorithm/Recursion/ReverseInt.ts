
/**
 * 输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。
 * 要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
 * @param {number} num 
 * @return {string}
 */
function reverseInt(num: number): string {
    // 存储十位以上的数字用来递归调用
    let num1 = Math.floor(num / 10);
    // 获取个位上的数字用来放入字符串中
    let num2 = num % 10;
    // 如果已经不存在十位以上的数字，直接返回
    if (num1 < 1) {
        return `${num}`;
    } else {
        return `${num2}${reverseInt(num1)}`
    }
}

export {reverseInt}