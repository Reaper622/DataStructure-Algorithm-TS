
/**
 * 给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。
 * 数组里字母的顺序是循环的
 * 
 * @param {string[]} letters 
 * @param {string} target 
 * @return {string}
 */
function NextGreatestLetter (letters: string[], target: string): string {
    let left = 0
    let right = letters.length - 1
    while (left < right) {
        let mid = Math.floor(left + (right - left)/2)
        // 如果找到了该字符并且下一位不重复
        if (letters[mid] === target && letters[mid + 1] !== target) {
            return letters[mid + 1]
        } else if (letters[mid] > target) {
            right = mid 
        } else {
            left = mid + 1
        }
    }
    // 如果边界处大于目标值
    if (letters[left] > target) {
        return letters[left]
    }
    // 否则 根据循环处理 返回第一个
    else {
        return letters[0]
    }
}

export {NextGreatestLetter}