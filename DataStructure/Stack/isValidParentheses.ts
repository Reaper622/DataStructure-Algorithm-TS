/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * @param {string} s
 * @return {boolean}
 */
var isValidParentheses = function(s: string): boolean {
    let stack = [];
    let arr = s.split('');
    // 定义字典 确定括号对照性
    let map = {
        '(':')',
        '[':']',
        '{':'}'
    }
    // 循环数组 
    for(let i = 0; i < arr.length; i++) {
        // 如果是首个就直接推入
        if (i=== 0) {
            stack.push(arr[i]);
        } else {
            let stackEnd = stack[stack.length - 1];
            // 如果当前与上一个括号对应 就弹出 否则就继续压入
            if (map[stackEnd] === arr[i]) {
                stack.pop()
            }else {
                stack.push(arr[i])
            }
        } 
    } 
    // 如果最后栈为空 即括号一一对应
    if (stack.length !== 0) {
        return false;
    } else {
        return true;
    }
};

export {isValidParentheses}