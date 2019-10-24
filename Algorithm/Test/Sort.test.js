import InsertSort from '../Sort/InsertSort'
import BubbleSort from '../Sort/BubbleSort'
import SelectSort from '../Sort/SelectSort'
import {QuickSort, QuickSort2} from '../Sort/QuickSort'


test('InsertSort', () => {
    let arr = [1,2,4,3,7,9,8,6,5]
    expect(InsertSort(arr)).toEqual([1,2,3,4,5,6,7,8,9])
})

test('BubbleSort', () => {
    let arr = [6,5,3,2,4,1]
    expect(BubbleSort(arr)).toEqual([1,2,3,4,5,6])
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