import InsertSort from '../Sort/InsertSort'
import {BubbleSort, BubbleSortBetter} from '../Sort/BubbleSort'
import SelectSort from '../Sort/SelectSort'
import {QuickSort, QuickSort2} from '../Sort/QuickSort'
import MergeSort from '../Sort/MergeSort'
import HeapSort from '../Sort/HeapSort'


test('InsertSort', () => {
    let arr = [1,2,4,3,7,9,8,6,5]
    expect(InsertSort(arr)).toEqual([1,2,3,4,5,6,7,8,9])
})

test('BubbleSort', () => {
    let arr = [6,5,3,2,4,1]
    expect(BubbleSort(arr)).toEqual([1,2,3,4,5,6])
    expect(BubbleSortBetter(arr)).toEqual([1,2,3,4,5,6])
})

test('SelectSort', () => {
    let arr = [1,2,4,3,7,9,8,6,5]
    expect(SelectSort(arr)).toEqual([1,2,3,4,5,6,7,8,9])
})

test('QuickSort', () => {
    let arr = [6,4,2,1,3,5]
    expect(QuickSort(arr)).toEqual([1,2,3,4,5,6])
    expect(QuickSort2(arr, 0, arr.length - 1)).toEqual([1,2,3,4,5,6])
})

test('MergeSort', () => {
    let arr = [6,4,2,1,3,5]
    expect(MergeSort(arr)).toEqual([1,2,3,4,5,6])
})

test('HeapSort', () => {
    let arr = [6,2,4,3,1,5]
    let arr2 = [6,3,2,1,4,5]
    expect(HeapSort(arr, 'min')).toEqual([1,2,3,4,5,6])
    expect(HeapSort(arr2, 'max')).toEqual([6,5,4,3,2,1])
})