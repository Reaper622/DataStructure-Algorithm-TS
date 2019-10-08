export default (s: string):boolean => {
  // 若字符串长度不是偶数 直接返回 false
  let stack:string[] = [];
  if(s.length % 2 !== 0) {
    return false;
  } else if (s === '') {
    return true;
  } else {
    s.split('').map(item => {
      if(stack.length === 0) {
        stack.push(item);
      } else if ((item === ')' ) && (stack[stack.length - 1] === '(')
        || (item === '}') && (stack[stack.length - 1] === '{')
        || (item === ']') && (stack[stack.length - 1] === '[')
      ) {
        stack.pop();
      } else {
        stack.push(item);
      }
    })
  }
  return stack.length === 0 ? true : false;

}