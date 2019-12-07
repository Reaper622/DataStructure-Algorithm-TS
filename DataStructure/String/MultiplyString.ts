/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function StringMultiply(num1:string, num2:string): string {
    if (typeof num1 !== 'string' || typeof num2 !== 'string' || num1.length === 0 || num2.length === 0) {
        return ""
    }
    // num1的第i位和num2的第j位相乘，结果放在乘积中的位置是[i+j, i+j+1]
    let len1 = num1.length;
    let len2 = num2.length;
    
    let result = new Array(len1+len2).fill(0)
    for(let i = len1 - 1; i >= 0; --i) {
        for(let j = len2 - 1; j >= 0; --j) {
            let bitmul = (parseInt(num1[i])) * (parseInt(num2[j]));
            
            bitmul += result[i+j+1]; // 加低位判断是否有新的进位
            result[i+j] += Math.floor(bitmul / 10); // 添加十位
            result[i+j+1] = bitmul % 10; // 添加后置个位
        }
    }
    let index = 0;
    // 去掉前置0
    while(index < result.length-1 && result[index] === 0) {
        index++;
    }
    
    return result.slice(index).join('');
}

export {StringMultiply}