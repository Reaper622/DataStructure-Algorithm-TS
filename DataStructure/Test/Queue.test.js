import Queue from '../Queue/Queue'
import CircleQueue from '../Queue/CircleQueue'


test('Queue', () => {
    let queue = new Queue()
    expect(queue.isEmpty()).toBe(true)
    queue.push(1)
    queue.push(2)
    queue.push(3)
    expect(queue.peek()).toBe(1)
    expect(queue.pop()).toBe(1)
    expect(queue.peek()).toBe(2)
    expect(queue.isEmpty()).toBe(false)
})

test('CircleQueue', () => {
    let circleQueue = new CircleQueue(3)
    expect(circleQueue.enQueue(1)).toBe(true)
    expect(circleQueue.enQueue(2)).toBe(true)
    expect(circleQueue.enQueue(3)).toBe(true)
    expect(circleQueue.enQueue(4)).toBe(false)
    expect(circleQueue.getRear()).toBe(3)
    expect(circleQueue.isFull()).toBe(true)
    expect(circleQueue.deQueue()).toBe(true)
    expect(circleQueue.enQueue(4)).toBe(true)
})