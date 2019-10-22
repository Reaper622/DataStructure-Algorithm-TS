import Heap from '../Heap/Heap'

test('Heap', () => {
    let heap = new Heap('max')
    heap.create([3,1,2])
    heap.add(6)
    heap.add(10)
    console.log(heap.value)
    expect(heap.value).toEqual([10,6,2,1,3])
    expect(heap.pop()).toEqual(10)
    expect(heap.value).toEqual([6,3,2,1])

})