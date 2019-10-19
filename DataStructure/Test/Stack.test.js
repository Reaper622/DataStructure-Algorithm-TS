import Stack from '../Stack/Stack'


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