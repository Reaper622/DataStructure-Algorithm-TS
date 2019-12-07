/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * @param {string} num1 
 * @param {string} num2 
 * @return {string}
 */
function StringAdd(num1: string, num2: string): string {
    if (typeof num1 !== 'string' || typeof num2 !== 'string' || num1.length < 1 || num2.length < 1) {
        return '';
    }
    // 补位
    while (num1.length < num2.length) {
        num1 = '0' + num1;
    }
    while (num2.length < num1.length) {
        num2 = '0' + num2;
    }
    let len = num1.length;
    // 存储结果的数组
    let result = [];
    // 进位
    let plus = 0;
    for(let i = len - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + plus
        if (sum > 9) {
            sum = sum % 10;
            plus = 1;
        } else {
            plus = 0;
        }
        result.unshift(sum);
    }
    return result.join('');
}

export {StringAdd}