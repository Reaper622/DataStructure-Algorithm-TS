export default (str: string):number => {
  let strArr: string[] = str.split('');
  let romaMap = (word: string, lastWord: string):number => {
    switch(word){
      case 'I': return 1;
      case 'V': {
        if (lastWord === 'I'){
          return 4 - 1;
        } else {
          return 5;
        }
      }
      case 'X': {
        if (lastWord === 'I'){
          return 9 - 1;
        } else {
          return 10;
        }
      }
      case 'L': {
        if (lastWord === 'X'){
          return 40 - 10;
        } else {
          return 50;
        }
      }
      case 'C': {
        if (lastWord === 'X') {
          return 90 - 10;
        } else {
          return 100;
        }
      }
      case 'D': {
        if (lastWord === 'C') {
          return 400 - 100;
        } else {
          return 500;
        }
      }
      case 'M': {
        if (lastWord === 'C') {
          return 900 - 100;
        } else {
          return 1000
        }
      }
    }
  }
  let result: number = 0;
  for(let i = 0; i < strArr.length; i++) {
    if (i = 0) {
      result += romaMap(strArr[i], '')
    } else {
      result += romaMap(strArr[i], strArr[i-1]);
    }
  }
  return result;
}