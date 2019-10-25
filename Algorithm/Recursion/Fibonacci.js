"use strict";
exports.__esModule = true;
/**
 * 使用递归实现斐波那契数列
 * @param {number} n
 * @return {number}
 */
function FibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }
    else {
        return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2);
    }
}
exports.FibonacciRecursive = FibonacciRecursive;
/**
 * 在递归中添加一个缓存来缓存计算过的值，避免重复计算
 * @param {number} n
 * @param {number[]} memory 用来添加一个缓存
 * @return {number}
*/
function FibonacciWithMemory(n, memory) {
    if (!memory) {
        memory = [];
    }
    if (n < 2) {
        return n;
    }
    if (!memory[n]) {
        memory[n] = FibonacciWithMemory(n - 1, memory) + FibonacciWithMemory(n - 2, memory);
    }
    return memory[n];
}
exports.FibonacciWithMemory = FibonacciWithMemory;
/**
 * 使用非递归的动态规划实现斐波那契数列
 * @param {number} n
 * @return {number}
 */
function Fibonacci(n) {
    if (n < 2) {
        return n;
    }
    // 记录索引值
    var i = 2;
    // 记录前一个值
    var pre = 1;
    // 记录当前值
    var current = 1;
    // 记录结果
    var result = 0;
    while (i++ < n) {
        result = pre + current;
        pre = current;
        current = result;
    }
    return result;
}
exports.Fibonacci = Fibonacci;
