export default (x: number):number => {
  // 数据溢出
  if( x < Math.pow(-2, 31) || x > Math.pow(2,31) - 1) {
    return 0;
  }
  let neg:boolean =  x < 0 ;
  if (neg) x = -x;
  let str: string[] = x.toString().split('');
  let resultStr: string = '';
  for(let i = str.length - 1; i >= 0; i--) {
    resultStr = resultStr + str[i];
  }
  let result = parseInt(resultStr);
  return neg ? -result : result;
}