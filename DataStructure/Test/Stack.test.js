import Stack from '../Stack/Stack'
import StackCheck from '../Stack/StackCheck'


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