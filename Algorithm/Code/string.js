"use strict";
// export default (str:string):string => {
//   // 字符串按空格分割, 保存数组 数组顺序即为单词顺序
//   let arr: string[] = str.split(' ');
//   // 对数组进行遍历 然后每个元素进行反转
//   let result: string[] = arr.map(item => {
//     // 把数组元素进行反转
//     return item.split('').reverse().join('');
//   })
//   return result.join(' ');
// }
exports.__esModule = true;
exports["default"] = (function (str) {
    return str.split(/\s/g).map(function (item) {
        return item.split('').reverse().join('');
    }).join(' ');
});
