export default (str: string): string[] => {
  // 建立数据结构，堆栈，保存数据  
  let r:string[] = []
  // 给定任意子输入，返回符合条件的字符串
  let match = (str:string):string => {
    let j:string = str.match(/^(0+|1+)/)[0];
    let o = (parseInt(j[0]) ^ 1).toString().repeat(j.length);
    let reg = new RegExp(`^(${j}${o})`)
    if(reg.test(str)){
      return RegExp.$1
    } else {
      return ''
    }
  }
  // for 循环控制程序流程
  for(let i = 0, len = str.length - 1; i < len; i++) {
    let sub: string = match(str.slice(i));
    if(sub) {
      r.push(sub)
    }
  }
  return r;
}