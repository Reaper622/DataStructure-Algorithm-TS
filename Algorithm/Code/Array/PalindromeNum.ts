export default (x: number):boolean => {
  let str: string = x.toString().split('').reverse().join('');
  let result: number = parseInt(str);
  return result === x ? true : false;
}