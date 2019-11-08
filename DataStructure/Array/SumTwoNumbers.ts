
/**
 * 给定一个整数数组 arr 和一个目标值 target，在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 * 
 * @param {number[]} arr 
 * @param {number} target 
 * @return {number[]}
 */
function SumTwoNumbers (arr: number[], target: number ):number[]  {
  let len:number = arr.length;
  let result: number[] = [];
  for(let i = 0; i < len-1; i++) {
    for(let j = i+1; j < len; j++){
      if(arr[i] + arr[j] === target) {
        result.push(i,j);
      }
    }
  }
  return result;
}

export {SumTwoNumbers}