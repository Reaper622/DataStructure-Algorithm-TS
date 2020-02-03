import Stack from '../Stack/Stack'
import StackCheck from '../Stack/StackCheck'
import MinStack from '../Stack/MinStack'
import {isValidParentheses} from '../Stack/isValidParentheses'


test('Stack', () => {
    let stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    console.log(stack.top)
    expect(stack.peek()).toBe(3)
    stack.print()
    expect(stack.pop()).toBe(3)
    stack.print()
    stack.clear()
    expect(stack.pop()).toBe(undefined)
    
})


test('StackCheck', () => {
    expect(StackCheck([1,2,3,4],[4,3,2,1])).toBe(true)
    expect(StackCheck([1,2,3,4,5],[4,5,3,2,1])).toBe(true)
    expect(StackCheck([1,2,3,4,5],[4,3,5,1,2])).toBe(false)
})

test('MinStack', () => {
    let minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3);   // --> 返回 -3.
    minStack.pop();
    expect(minStack.top()).toBe(0);      // --> 返回 0.
    expect(minStack.getMin()).toBe(-2);   // --> 返回 -2.
})

test('isValidParentheses', () => {
    expect(isValidParentheses('([])')).toBe(true)
    expect(isValidParentheses('([{]})')).toBe(false)
})