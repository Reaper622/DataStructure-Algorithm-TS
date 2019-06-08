export default (str:string):string[] => {
  // 建立电话号码键盘映射
  let map:string[] = ['','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
  // 输入字符串 单字符分割 23 => [2,3]
  let num:string[] = str.split('');
  // 保存映射后的字母内容 23 => ['abc','def']
  let code:string[] = []
  num.forEach(item => {
    if(map[item]) {
      code.push(map[item])
    }
  })
  let comb = (arr:string[]):string[] => {
    // 临时变量 保存前两个组合的结果
    let tmp:string[] = []
    // 最外层的循环是遍历第一个元素 里层循环遍历第二个元素
    for(let i =0,il=arr[0].length; i < il; i++){
      for(let j = 0, jl=arr[1].length; j < jl; j++){
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0,2,tmp);
    if(arr.length > 1) {
      comb(arr);
    } else {
      return tmp;
    }
    return arr[0]
  }
  return comb(code)
}