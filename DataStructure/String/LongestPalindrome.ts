/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。
 * @param {string} s
 * @return {string}
 */
var LongestPalindrome = function(s: string): string {
    if (s.length === 0 || s.length === 1) {
        return s;
    }
    let max = 0;
    let arr = [];
    let result = '';
    // 设置一个数组来检测是否是回文的
    for(let i = 0; i < s.length; i++) {
        arr[i] = [];
    }
    for(let right = 1; right < s.length; right++) {
        for(let left = 0; left < right; left++) {
            // 如果左侧等于右侧  并且right 和 left 之间没有间隔或者有一个间隔 或者内部也为回文的 那么也为回文的
            if (s.charAt(left) === s.charAt(right) && (right -left <= 2 || arr[left + 1][right - 1] === true)) {
                arr[left][right] = true;
                // 如果是当前是最大的 替换当前最大值
                if (right - left + 1 > max) {
                    max = right - left + 1;
                    result = s.slice(left, right + 1);
                }
            }
        }
    }
    // 如果没有回文的子串 就返回第一个字符
    if (max === 0 ) {
        result = s[0];
    }
    return result;
}

export {LongestPalindrome}