export default (arr: number[]): number => {
  if (arr.length === 0) {
    return 0;
  }
  else if (arr.length === 1) {
    return 1;
  }
  let i:number = 0;
  for (let j:number = 1; j < arr.length;j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }  
  return i + 1;
}