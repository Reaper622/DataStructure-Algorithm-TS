import Queue from '../Queue/Queue'
import CircleQueue from '../Queue/CircleQueue'
import CircularDeque from '../Queue/CircularDeque'


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

test('CircularDeque', () => {
    let circularDeque = new CircularDeque(3)
    expect(circularDeque.insertLast(1)).toBe(true)
    expect(circularDeque.insertLast(2)).toBe(true)
    expect(circularDeque.insertFront(3)).toBe(true)
    expect(circularDeque.insertFront(4)).toBe(false)
    expect(circularDeque.getRear()).toBe(2)
    expect(circularDeque.isFull()).toBe(true)
    expect(circularDeque.deleteLast()).toBe(true)
    expect(circularDeque.insertFront(4)).toBe(true)
    expect(circularDeque.getFront()).toBe(4)
})