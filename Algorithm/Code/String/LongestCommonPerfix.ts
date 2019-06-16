export default (strs: string[]):string => {
  if(strs.length <= 0) {
    return strs[0] || '';
  }
  // 排序
  strs.sort();
  if(strs[0] === ''){
    return '';
  }
  // 排序后只需比较第一位与最后一位即可
  let first:string = strs[0];
  let last:string = strs[strs.length - 1];
  if (first === last || last.match(eval(`/${first}/`))){
    return first;
  }
  else {
    for(let i = 0; i< first.length; i++) {
      if (first[i] !== last[i]) {
        return first.substring(0,i);
      }
    }
  }
}