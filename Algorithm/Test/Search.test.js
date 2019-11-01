import {BinarySearch} from '../Search/BinarySearch'
import {Sqrt} from '../Search/Sqrt'
import {GetIndexFromRotateArray} from '../Search/GetIndexFromRotateArray'
import {FindPeakElement} from '../Search/FindPeakElement'

test('BinarySearch', () => {
    expect(BinarySearch([-1,0,3,5,9,12], 9)).toBe(4)
})

test('Sqrt', () => {
    expect(Sqrt(9)).toBe(3)
    expect(Sqrt(16)).toBe(4)
})

test('GetIndexFromRotateArray', () => {
    expect(GetIndexFromRotateArray([4,5,6,7,0,1,2], 1)).toBe(5)
})

test('FindPeak', () => {
    expect(FindPeakElement([1,2,1,3,5,6,4])).toBe(1|5)
})