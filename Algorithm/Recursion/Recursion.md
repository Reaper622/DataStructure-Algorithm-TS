# 递归

递归是一种解决问题的有效方法，在递归过程中，函数会将此身作为子例程调用。递归是自项向下的。

递归的特点：

- 子调用必须和原始调用处理相同的问题，且目的是将原问题变得简单。
- 不能无限制得调用，存在最大调用栈限制，必须有个出口，也就是对非递归状况的处理。

递归使一些使用循环可能很复杂的操作给简化，同时也让代码变得很美观，但同时它也存在一些缺点，那就是过高的资源使用率，一些大量计算的递归会直接使JS进程崩溃。

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

## 

