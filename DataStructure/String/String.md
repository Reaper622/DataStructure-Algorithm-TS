# 字符串

> 字符串实际上是一个 `unicode 字符`数组，但和直接的数组还是存在一些区别。

## 最长公共前缀

> 此部分代码在 LongestCommonPrefix.ts 中

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串。

```typescript
/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串。
 * @param {string[]} strs 
 * @return {string}
 */
function LongestCommonPerfix (strs: string[]):string  {
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
  if (first === last || last.match(eval(`/^${first}/`))){
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
```

