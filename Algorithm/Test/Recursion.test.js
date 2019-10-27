import {FibonacciRecursive, FibonacciWithMemory, Fibonacci} from '../Recursion/Fibonacci'
import {ClimbStairs, ClimbStairsWithMemory} from '../Recursion/ClimbStairs'

test('FibonacciRecursive', () => {
    expect(FibonacciRecursive(5)).toBe(5)
})

test('FibonacciWithMemory', () => {
    expect(FibonacciWithMemory(5)).toBe(5)
})

test('Fibonacci', () => {
    expect(Fibonacci(5)).toBe(5)
})

test('climbStairs', () => {
    expect(ClimbStairs(4)).toBe(5)
    expect(ClimbStairsWithMemory(4)).toBe(5)
})