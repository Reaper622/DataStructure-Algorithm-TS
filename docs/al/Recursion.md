---
sidebar: auto
---
# 递归

递归是一种解决问题的有效方法，在递归过程中，函数会将此身作为子例程调用。递归是自项向下的。

递归的特点：

- 子调用必须和原始调用处理相同的问题，且目的是将原问题变得简单。
- 不能无限制得调用，存在最大调用栈限制，必须有个出口，也就是对非递归状况的处理。

递归使一些使用循环可能很复杂的操作给简化，同时也让代码变得很美观，但同时它也存在一些缺点，那就是过高的资源使用率，一些大量计算的递归会直接使JS进程崩溃。

> 只要有可能，就尽量使用记忆化。

当可能会存在堆栈溢出时，可以使用**尾递归**的方法来进行优化。尾递归可以消除递归带来的堆栈开销，优化了算法的空间复杂度。

## 斐波那契数列

> 此部分代码在 Fibonacci.ts 中

斐波那契是一个很经典的递归例子，他的结果依据于前面的结果，递归是从最大数开始，不断拆解成小的数计算。

```typescript
/**
 * 使用递归实现斐波那契数列
 * @param {number} n 
 * @return {number}
 */
function FibonacciRecursive(n: number) : number {
    if (n < 2) {
        return n
    }
    else {
        return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2)
    }
}
```

为了解决一些重复计算造成的问题，我们可以使用一个缓存数组来缓存一些计算过的数据来减少重复计算

```typescript
/** 
 * 在递归中添加一个缓存来缓存计算过的值，避免重复计算
 * @param {number} n
 * @param {number[]} memory 用来添加一个缓存
 * @return {number}
*/
function FibonacciWithMemory(n: number, memory: number[]): number {
    if (!memory) {
        memory = []
    }
    if (n < 2) {
        return n
    }
    if (!memory[n]) {
        memory[n] = FibonacciWithMemory(n - 1, memory) + FibonacciWithMemory(n - 2, memory)
    }

    return memory[n]
}
```

但同时，因为存在重叠，并且在计算大数时调用次数过多，因此斐波那契数列其实也并不是完美适合于递归的，每一次函数的调用在内存中都要分配空间，然而每个进程中的栈的容量是有限的，递归层次过多就会造成溢出。因此也可以使用动态规划的方法来实现斐波那契数列

```typescript
/**
 * 使用非递归的动态规划实现斐波那契数列
 * @param {number} n 
 * @return {number}
 */
function Fibonacci(n: number): number {
    if (n < 2) {
        return n
    }
    // 记录索引值
    let i = 2
    // 记录前一个值
    let pre = 1
    // 记录当前值
    let current = 1
    // 记录结果
    let result = 0
    while(i++ < n) {
        result = pre + current
        pre = current
        current = result
    }
    return result
}
```

## 爬楼梯

> 此部分代码在 ClimbStairs.ts 中

假设你正在爬楼梯。需要 *n* 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

我们使用递归的解法，其实这和 斐波那契数列很像，后面的结果依赖于前面的结果。比如我们要上十层台阶，因为一次只能上一层或者两层台阶，那么到达第十层台阶的方法就是**第八层台阶的上法**和**第九层台阶的上法**，依次方法递推，一直到边界 「一层台阶」和「两层台阶」，然后根据结果一步步计算就可以得到第十层台阶的上法。

```typescript
/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶，求有多少种方法到达楼顶
 * 递归实现爬楼梯问题
 * @param {number} n 
 * @return {number}
 */
function ClimbStairs (n: number): number {
    if (n <= 2) {
        return n
    } else {
        return ClimbStairs(n-1) + ClimbStairs(n-2)
    }
}
```

我们直接使用递归也会存在大量的**重复计算**,因此我们可以引入记忆化来优化算法。

```typescript
/**
 * 使用记忆化存储避免重复计算
 * @param {number} n
 * @param {number[]} memory
 * @return {number}
 */
function ClimbStairsWithMemory(n: number, memory: number[]) :number {
    if (!memory) {
        memory = []
    }
    if (n <= 2) {
        return n
    }
    if (!memory[n]) {
        memory[n] = ClimbStairsWithMemory(n-1, memory) + ClimbStairsWithMemory(n-2, memory)
    }
    return memory[n]
}
```

## Pow

> 此部分代码在 Pow.ts 中

手动实现一个求幂的函数，同时要求尽可能少的利用调用栈，我们可以通过每次将`Pow(x,n)`变为`Pow(x^2, n/2)`来计算，能够指数级地减少调用的栈。

```typescript
/**
 * 实现求幂的功能
 * @param {number} x 
 * @param {number} n 
 */
function Pow(x: number, n: number): number {
    // 对特殊情况和边界进行处理
    if (n === 0) {
        return 1
    } else if (n === 1) {
        return x
    }
    // 如果指数为负数
    if (n < 0) {
        x = 1/x
        n = -n
    }

    if (n % 2 === 0) {
        return Pow(x*x, n/2)
    } else {
        return Pow(x*x, Math.floor(n/2))*x
    }
}
```

## 翻转数字变化为字符串

> 此部分代码在 ReverseInt.ts 中

用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。

```typescript
/**
 * 输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。
 * 要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
 * @param {number} num 
 * @return {string}
 */
function reverseInt(num: number): string {
    // 存储十位以上的数字用来递归调用
    let num1 = Math.floor(num / 10);
    // 获取个位上的数字用来放入字符串中
    let num2 = num % 10;
    // 如果已经不存在十位以上的数字，直接返回
    if (num1 < 1) {
        return `${num}`;
    } else {
        return `${num2}${reverseInt(num1)}`
    }
}
```

