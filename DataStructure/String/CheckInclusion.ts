
/**
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function CheckInclusion (s1: string, s2: string) : boolean {
    if (typeof s1 !== 'string' || typeof s2 !== 'string' || s1.length === 0 || s2.length === 0) {
        return false;
    }
    // 创建一个字典
    let dictionary = new Array(26).fill(0);
    // 遍历s1上的字符，在字典上进行记录
    for(let i = 0; i < s1.length; i++) {
        let code = s1.charCodeAt(i) - 97;
        dictionary[code]++;
    }
    // 之后统计s2上的字符，每当出现后在字典上减少一个
    for(let start = 0, end = 0; end < s2.length; end++) {
        let code = s2.charCodeAt(end) - 97;
        dictionary[code]--;
        // 当出现了s1中不存在的字符或者数量超过s1中字符量，向前移动
        while (dictionary[code] < 0) {
            dictionary[s2.charCodeAt(start) - 97]++;
            start++;
        }
        // 如果此时出现全部符合同时长度与s1相同的子串，则查找成功
        if (end - start + 1 === s1.length) return true;
    }
    return false;
}

export {CheckInclusion}