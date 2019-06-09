
export default (arr:number[]) => {
  // 卡牌排序 排序的目的为了让相同的排在一起 方便费祖
  let str:string = arr.sort().join('');
  // 分组 (单张 或者多张分组)
  let group: string[] = str.match(/(\d)\1+|\d/g)
  // 计算最大公约数
  function gcd(a:number,b:number):number {
    if(b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  while(group.length > 1) {
    let a:number = group.shift().length;
    let b:number = group.shift().length;
    let v:number = gcd(a, b);
    if(v === 1) {
      // 没有公约数
      return false;
    } else {
      group.unshift('0'.repeat(v))
    }
  }
  return group.length ? group[0].length > 1 : false
}