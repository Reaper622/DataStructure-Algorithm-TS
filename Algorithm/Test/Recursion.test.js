import {FibonacciRecursive, FibonacciWithMemory, Fibonacci} from '../Recursion/Fibonacci'

test('FibonacciRecursive', () => {
    expect(FibonacciRecursive(5)).toBe(5)
})

test('FibonacciWithMemory', () => {
    expect(FibonacciWithMemory(5)).toBe(5)
})

test('Fibonacci', () => {
    expect(Fibonacci(5)).toBe(5)
})