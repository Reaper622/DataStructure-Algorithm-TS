import Heap from '../../DataStructure/Heap/Heap'

/**
 * 根据传入堆的类型来返回排序数组
 * 大顶堆对应从大到小
 * 小顶堆对应从小到大
 * 
 * @param {number[]} array 
 * @param {string} type 
 */
function HeapSort(array: number[], type: string): number[] {
    const len = array.length
    let heap = new Heap(type)
    heap.create(array)
    let result = []
    for(let i = 0; i < len; i++) {
        result.push(heap.pop())
    }
    return result
}

export default HeapSort