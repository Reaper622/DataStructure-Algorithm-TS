/**
 * 给定一个字符串，超出其中不含有重复字符的最长子串长度。
 * @param {string} s 
 * @return {number}
 */
function LengthOfLongestSubstring(s: string): number {
    // 定义一个空字符串用来记录当前子串
    let sub = '';
    // 定义一个值用来记录当前子串长度与最长子串长度
    let count = 0,
        result = 0;
    for(let n of s) {
        // 如果当前子串内不含此字符 则添加此字符
        if (sub.indexOf(n) === -1) {
            sub += n;
            count++;
            // 判断此时是否超过最大子串长度，如超过，则替换此时的最大子串长度
            result = count > result ? count : result;
        } else {
            //如果包含 则更新子串
            sub = sub.slice(sub.indexOf(n)+1);
            sub += n;
            count = sub.length;
        }
    }
    return result;
}

export {LengthOfLongestSubstring}