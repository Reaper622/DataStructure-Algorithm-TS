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

## 字符串的数字运算

### 字符串相加

> 此部分代码在 StringAdd.ts 中

给定两个字符串形式的非负整数 `num1` 和`num2` ，计算它们的和。

```typescript
/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * @param {string} num1 
 * @param {string} num2 
 * @return {string}
 */
function StringAdd(num1: string, num2: string): string {
    if (typeof num1 !== 'string' || typeof num2 !== 'string' || num1.length < 1 || num2.length < 1) {
        return '';
    }
    // 补位
    while (num1.length < num2.length) {
        num1 = '0' + num1;
    }
    while (num2.length < num1.length) {
        num2 = '0' + num2;
    }
    let len = num1.length;
    // 存储结果的数组
    let result = [];
    // 进位
    let plus = 0;
    for(let i = len - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + plus
        if (sum > 9) {
            sum = sum % 10;
            plus = 1;
        } else {
            plus = 0;
        }
        result.unshift(sum);
    }
    return result.join('');
}
```



### 字符串相乘

> 此部分代码在 MultiplyString.ts 中

给定两个以字符串形式表示的非负整数 `num1` 和 `num2`，返回 `num1` 和 `num2` 的乘积，它们的乘积也表示为字符串形式。

我们使用数组存储每一位上的计算结果，将num1的第i位(高位从0开始)和num2的第j位相乘的结果在乘积中的位置是[i+j, i+j+1]，之后合并数组即可获得结果。

```typescript
/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * @param {String} num1
 * @param {String} num2
 * @return {string}
 */
function StringMultiply(num1:String, num2:String): string {
    if (typeof num1 !== 'string' || typeof num2 !== 'string' || num1.length === 0 || num2.length === 0) {
        return ""
    }
    // num1的第i位和num2的第j位相乘，结果放在乘积中的位置是[i+j, i+j+1]
    let len1 = num1.length;
    let len2 = num2.length;
    
    let result = new Array(len1+len2).fill(0)
    for(let i = len1 - 1; i >= 0; --i) {
        for(let j = len2 - 1; j >= 0; --j) {
            let bitmul = (parseInt(num1[i])) * (parseInt(num2[j]));
            
            bitmul += result[i+j+1]; // 加低位判断是否有新的进位
            result[i+j] += Math.floor(bitmul / 10); // 添加十位
            result[i+j+1] = bitmul % 10; // 添加后置个位
        }
    }
    let index = 0;
    // 去掉前置0
    while(index < result.length-1 && result[index] === 0) {
        index++;
    }
    
    return result.slice(index).join('');
}
```

## 复原IP地址

> 此部分在 RestoreIpAddresses.ts 中

给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

```typescript
/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * @param {string} s
 * @return {string[]}
 */
function RestoreipAddress(s:string): string[] {
    if (typeof s !== 'string' || s.length > 12) {
        return [];
    }
    let result = [];
    ipHandler(s, [], result);
    return result;
}

/**
 * 处理剩余的字符并递归转化字符串。
 * @param {string} remain 
 * @param {string[]} temp 
 * @param {string[]} result 
 */
function ipHandler (remain:string, temp: string[], result: string[]) {
    // 已经存在三段，即此时为最后一段
    if (temp.length === 3) {
        // 判断剩余的字符串是否符合ip规范
        regular(remain) && result.push([...temp, remain].join('.'));
        return;
    }
    // 递归循环遍历 1 - 3个字符，判断是否符合ip规范
    for(let i = 1; i < 4; i++) {
        regular(remain.substr(0,i)) && ipHandler(remain.substr(i), [...temp, remain.substr(0,i)], result)
    }
}
/**
 * 判断是否符合ip规则。
 * @param {string} s 
 * @return {boolean}
 */
function regular (s:string): boolean {
    if (!s.length) return false;
    // 不可小于0大于255，并且如果超过一位不能以0开头
    return +s >= 0 && +s <= 255 && (s.length > 1 ? s.charAt(0) !== '0' : true);
}
```

## 回文数

### 最长回文子串

> 此部分代码在 LongestPalindrome.ts  中

给定一个字符串 `s`，找到 `s` 中最长的回文子串。

使用动态规划来进行计算，我们定义一个二维数组`arr`，定义两个索引`i`,`j`，如果`i`到`j`是回文的那么`arr[i][j]`的值为`true`，那么如果`i-1`，`j+1`，也相同,只要`arr[i][j]`也为`true`，那么也就为回文。

```typescript
/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。
 * @param {string} s
 * @return {string}
 */
var LongestPalindrome = function(s: string): string {
    if (s.length === 0 || s.length === 1) {
        return s;
    }
    let max = 0;
    let arr = [];
    let result = '';
    // 设置一个数组来检测是否是回文的
    for(let i = 0; i < s.length; i++) {
        arr[i] = [];
    }
    for(let right = 1; right < s.length; right++) {
        for(let left = 0; left < right; left++) {
            // 如果左侧等于右侧  并且right 和 left 之间没有间隔或者有一个间隔 或者内部也为回文的 那么也为回文的
            if (s.charAt(left) === s.charAt(right) && (right -left <= 2 || arr[left + 1][right - 1] === true)) {
                arr[left][right] = true;
                // 如果是当前是最大的 替换当前最大值
                if (right - left + 1 > max) {
                    max = right - left + 1;
                    result = s.slice(left, right + 1);
                }
            }
        }
    }
    // 如果没有回文的子串 就返回第一个字符
    if (max === 0 ) {
        result = s[0];
    }
    return result;
}
```

