
/**
 * 将输入的字符串反转过来,不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间。
 * @param {string[]} s 
 * @return {string[]}
 */
function ReverseString(s:string[]):string[] {
    if (s.length < 2) {
        return s
    }
    let left = 0
    let right = s.length - 1
    while(left < right) {
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
    return s
}

export {ReverseString}