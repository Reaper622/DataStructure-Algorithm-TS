import {FibonacciRecursive, FibonacciWithMemory, Fibonacci} from '../Recursion/Fibonacci'
import {ClimbStairs, ClimbStairsWithMemory} from '../Recursion/ClimbStairs'
import {Pow} from '../Recursion/Pow'
import {reverseInt} from '../Recursion/ReverseInt'

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

test('Pow', () => {
    expect(Pow(2, 10)).toBe(1024)
})

test('ReverseInt', () => {
    expect(reverseInt(12345)).toBe('54321');
})