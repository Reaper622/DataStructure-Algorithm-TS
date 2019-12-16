---
sidebar: auto
---

# 二进制

二进制常见的算法题目之一，二进制的一些相关运算如下：

| 操作名  | 结果      | 结果       | 结果              | 结果      |
| ------- | --------- | ---------- | ----------------- | --------- |
| 与(&)   | 0&0 == 0  | 0 & 1 == 0 | 1&0 == 0          | 1&1 == 1  |
| 或(\|)  | 0\|0 == 0 | 0\|1 == 1  | 1\|0 == 1         | 1\|1 == 1 |
| 异或(^) | 0^0 == 0  | 0^1 == 1   | 1^0 == 1          | 1^1==0    |
| 取反    | 1变0      | 0变1       | 最高位为1则为负数 |           |

​	位的移动运算：

`<<`为左移运算符， `m<<n`表示把m左移动n位。左移n位时，最左边的n位会丢弃，最右侧会补上n个0

`>>`为右移运算符，`m>>n`表示把m右移动n位，右移动n位时，最右侧的n位会被丢弃，但是左侧会根据**正负**而产生不同的结果，当为正数时，左侧补上n个0，当为负数时，左侧补上n个1。

`>>>`为无符号右移运算符，此时右移不考虑正负因素，全部用0填充。

## 不使用加减乘除操作符实现加减乘除法

> 此部分代码在 PlusMinusMultiplyDivide.ts 中

### 位运算实现加法

位运算实现加法。异或之后通过与运算获取进位进位一位后递归求和，直到无进位。

```typescript
/**
 * 位运算实现加法。异或之后通过与运算获取进位进位一位后递归求和，直到无进位。
 * @param {number} num1 
 * @param {number} num2 
 * @return {number}
 */
function plus (num1: number, num2: number): number {
    if (num2 === 0) {
        return num1;
    }
    // 取两者的 异或 即和 （不含进位）
    let sum = num1 ^ num2;
    // 取二者的进位 向左移动一位
    let carry = (num1 & num2) << 1;
    return plus (sum, carry);
}
```

### 位运算实现减法

计算机内，减法被转化为加上该数的负数，即我们也以加法实现。

```typescript
/**
 * 计算机内，减法被转化为加上该数的负数，即我们也以加法实现。
 * @param {number} num1 
 * @param {number} num2 
 * @return {number}
 */
function minus(num1: number, num2: number): number {
    // 我们通过求补码算出该数的负数, 取反 + 1 即为 补码
    let subtractor = plus(~num2, 1);
    // num1 + num2补码 即为 num1 - num2
    return plus(num1, subtractor);
}
```

### 位运算实现乘法

在已经实现加法的情况下，乘法直接为我们被乘数 加上乘数倍的自己即可，但要考虑负数的情况。

我们可以先通过计算绝对值的乘数结果，之后根据符号位结果确定最终符号即可。

```typescript
/**
 * 在已经实现加法的情况下，乘法直接为我们被乘数 加上乘数倍的自己即可，但要考虑负数的情况。
 * 我们可以先通过计算绝对值的乘数结果，之后根据符号位结果确定最终符号即可。
 * @param {number} num1 
 * @param {number} num2 
 * @return {number}
 */
function multiply(num1: number, num2: number): number {
    // 取绝对值
    let num1Abs = num1 < 0 ? plus(~num1, 1) : num1;
    let num2Abs = num2 < 0 ? plus(~num2, 1) : num2;
    // 计算绝对值的乘积
    // 记录循环次数
    let count = 0;
    // 最终结果
    let result = 0;
    while (count < num2Abs) {
        result = plus(result, num1Abs);
        count = plus(count, 1);
    }
    // 确定最终结果的符号
    if ((num1 ^ num2) < 0) {
        result = plus(~result, 1);
    }
    return result;
}
```

### 位运算实现除法

除法运算即可以看做被除数一直减去除数直到被除数小于除数为止，此时进行减法的次数就是商，而剩余的被除数就是余数。

同样，除法也要注意符号问题，我们和乘法对于符号的解决方法相同。

```typescript
/**
 * 除法运算即可以看做被除数一直减去除数直到被除数小于除数为止，此时进行减法的次数就是商，而剩余的被除数就是余数。
 * 同样，除法也要注意符号问题，我们和乘法对于符号的解决方法相同。
 * @param {number} num1 
 * @param {number} num2 
 * @return {number}
 */
function divide(num1: number, num2: number): number {
    //先求被除数和除数的绝对值
    let num1abs = num1 < 0 ? plus(~num1, 1) : num1;
    let num2abs = num2 < 0 ? plus(~num2, 1) : num2;
    // 记录循环次数
    let count = 0;
    let result = num1abs;
    while (result >= num2abs) {
        result = minus(result, num2abs);
        count = plus(count, 1);
    }
    // 循环次数即为商
    return count;
}
```

## 二进制中1的个数

> 此部分代码在 NumberOfOne.ts 中

我们首先使用一种常规方法，我们不右移传入的`num`，而是每次都左移动判断是否存在1的标识符`flag`，当flag为1时，首先和num的最右位判断，如果为1，count加1，之后左移动`flag`，`flag`变为10，便可判断num的右二位是否为1，依次类推 知道左移动到超出二进制最大限度为止，即对于32位的整数要循环32次。

```typescript
/**
 * 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数。
 * @param {number} num 
 * @return {number}
 */
function NumberOfOne(num: number) :number {
    // 记录1的个数
    let count = 0
    // 判断的标识
    let flag = 1
    while(flag) {
        // 当前位为1
        if (num & flag) {
            count++
        }
        // 标识符左移一位 判断次低位是否为1
        flag = flag << 1
    }
    return count
}
```

但是这种解法无论如何都要循环32次，效率低下，我们选择使用一种解法让他只循环1的个数次

我们知道，当一个二进制数不为0，我们就默认它内部含有1，当一个二进制的数减1时，会把它最右侧的1变为0，而这个最右侧的1如果右侧还有0则会统统变成1，我们可以让原数和减一之后的数做与运算，即可知道当前左侧还有几个1。那么一个二进制数有多少个1，就可以循环多少次。

```typescript
/**
 * 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数。
 * @param {number} num 
 * @return {number}
 */
function NumberOfOneBetter(num: number): number {
    let count = 0
    // 如果不为0就认为内部还有1
    while (num) {
        count++
        num = num & (num-1)
    }
    return count
}
```

## 数组中只出现一次的数

> 此部分代码在 FindNumberAppearOnce.ts 中

寻找一个数组中只出现依次的数字，若不存在则返回 -1。

```typescript
/**
 * 找到一个数组中只出现一次的数字。若不存在则返回-1
 * @param {number[]} numbers 
 * @return {number}
 */
function FindNumberAppearOnce(numbers: number[]): number {
    if (!numbers || numbers.length < 2) {
        return -1;
    }
    // 对所有数字进行异或的结果
    let resultOR = 0;
    let len = numbers.length;
    // 依次进行异或操作，因为除一个数字之外其他数字均为两个，所以异或结果位为1的地方即为单个数字位也为1的地方
    for(let i = 0; i < len; i++) {
        resultOR =  resultOR^numbers[i];
    }
    // 返回结果 即为只出现一次的数字
    return result
}
```

## 不用加减乘除做加法

> 此部分代码在 StrictAdd.ts 中

写一个函数，求两整数之和，函数内部不能使用 + - x ÷ 四则运算。

```typescript
/**
 * 在不使用数学运算的前提下计算加法。
 * @param {number} num1 
 * @param {number} num2 
 */
function StrictAdd(num1: number, num2: number): number {
    // 定义变量存储和、进位
    let sum: number, carry: number;
    while (num2 !== 0) {
        // 首先做异或操作
        sum = num1 ^ num2;
        // 计算进位
        carry = (num1 & num2) << 1;
        // 循环计算进位 直到不存在进位
        num1 = sum;
        num2 = carry;
    }
    return num1;
}
```

