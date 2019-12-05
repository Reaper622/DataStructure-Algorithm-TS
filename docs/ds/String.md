---
sidebar: auto
---

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

## 计数二进制子串

> 此部分代码在 CountBinarySubstrings.ts 中

给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

重复出现的子串要计算它们出现的次数。

```typescript
/**
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
 * 重复出现的子串要计算它们出现的次数。
 * @param {string} str 
 * @return {number}
 */
function CountBinarySubstrings (str: string): number {
    // 建立数据结构，堆栈，保存数据  
    let r:string[] = []
    // 给定任意子输入，返回符合条件的字符串
    let match = (str:string):string => {
        let j:string = str.match(/^(0+|1+)/)[0];
        let o = (parseInt(j[0]) ^ 1).toString().repeat(j.length);
        let reg = new RegExp(`^(${j}${o})`)
        if(reg.test(str)){
        return RegExp.$1
        } else {
        return ''
        }
    }
    // for 循环控制程序流程
    for(let i = 0, len = str.length - 1; i < len; i++) {
        let sub: string = match(str.slice(i));
        if(sub) {
        r.push(sub)
        }
    }
    return r.length
}
```

## 二进制求和

> 此部分代码在 SumBinary.ts 中

给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为**非空**字符串且只包含数字 `1` 和 `0`。

```typescript
/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示。
 * 输入为非空字符串且只包含数字 1 和 0。
 * @param {string} a 
 * @param {string} b 
 * @return {string}
 */
function SumBinary (a: string, b: string):string {
    let arrA = a.split('')
    let arrB = b.split('')
    // 补齐两个数组的长度
    const len = Math.max(arrA.length, arrB.length) + 1
    // 用'0'填充两个数组
    while(arrA.length < len) {
        arrA.unshift('0')
    } 
    while(arrB.length < len) {
        arrB.unshift('0')
    }
    // 存储结果
    let result = []
    for(let i = len-1; i > 0; i--) {
        result[i] = result[i] ? result[i] + parseInt(arrA[i]) + parseInt(arrB[i]) : parseInt(arrA[i]) + parseInt(arrB[i])
        // 进位操作
        if (result[i] > 1) {
            result[i - 1] = result[i - 1] ? result[i - 1] + 1 : 1
            result[i] = result[i] % 2
        }
    }
    if (!result[0]) {
        result.shift()
    }
    return result.join('')
}
```

## 无重复的最长子串

> 此部分代码在 LengthOfLongestSubstring.ts 中

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。本题用到了滑动窗口的方法。

```typescript
/**
 * 给定一个字符串，超出其中不含有重复字符的最长子串长度。
 * @param {string} s 
 * @return {number}
 */
function LengthOfLongestSubstring(s: string): number {
    // 定义一个空字符串用来记录当前子串
    let sub = '';
    // 定义一个值用来记录当前子串长度与最长子串长度
    let count = 0,
        result = 0;
    for(let n of s) {
        // 如果当前子串内不含此字符 则添加此字符
        if (sub.indexOf(n) === -1) {
            sub += n;
            count++;
            // 判断此时是否超过最大子串长度，如超过，则替换此时的最大子串长度
            result = count > result ? count : result;
        } else {
            //如果包含 则更新子串
            sub = sub.slice(sub.indexOf(n)+1);
            sub += n;
            count = sub.length;
        }
    }
    return result;
}
```

##  字符串的排列

> 此部分代码在 CheckInclusion.ts中

给定两个字符串 **s1** 和 **s2**，写一个函数来判断 **s2** 是否包含 **s1** 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。
#### 定义字典
我们可以先定义一个存储26个字母的字典「Hash」，用来存储每个字母出现的次数。
```typescript
 let dictionary = new Array(26).fill(0);
```
#### 遍历S1,完善字典
之后我们遍历s1中的字符，并向字典上添加记录
```typescript
// 遍历s1上的字符，在字典上进行记录
for(let i = 0; i < s1.length; i++) {
    let code = s1.charCodeAt(i) - 97;
    dictionary[code]++;
}
```
#### 遍历S2,根据字典判断是否查找到子字符串
之后，我们在s2上定义两个索引，一个指向子字符串的开头，一个指向子字符串的末尾，我们一开始只移动末尾索引来增长子串
但是当我们遇到字典上某一个字母出现负值，意味着子串中出现了我们s1中没有的字符或者存在的字符数量超出，我们就向前移动头部索引来剪短子串，同时恢复字典上的值
在遍历途中，当找到了对应的子串时，一定是字典中没有小于0并且长度相同 === 字典中全部为0 === s1与子字符串中字符相同

```typescript
/**
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function CheckInclusion (s1: string, s2: string) : boolean {
    if (typeof s1 !== 'string' || typeof s2 !== 'string' || s1.length === 0 || s2.length === 0) {
        return false;
    }
    // 创建一个字典
    let dictionary = new Array(26).fill(0);
    // 遍历s1上的字符，在字典上进行记录
    for(let i = 0; i < s1.length; i++) {
        let code = s1.charCodeAt(i) - 97;
        dictionary[code]++;
    }
    // 之后统计s2上的字符，每当出现后在字典上减少一个
    for(let start = 0, end = 0; end < s2.length; end++) {
        let code = s2.charCodeAt(end) - 97;
        dictionary[code]--;
        // 当出现了s1中不存在的字符或者数量超过s1中字符量，向前移动
        while (dictionary[code] < 0) {
            dictionary[s2.charCodeAt(start) - 97]++;
            start++;
        }
        // 如果此时出现全部符合同时长度与s1相同的子串，则查找成功
        if (end - start + 1 === s1.length) return true;
    }
    return false;
}
```

