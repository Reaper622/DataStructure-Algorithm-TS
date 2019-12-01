import {BinarySearch} from '../Search/BinarySearch'
import {Sqrt} from '../Search/Sqrt'
import {GetIndexFromRotateArray} from '../Search/GetIndexFromRotateArray'
import {FindPeakElement} from '../Search/FindPeakElement'
import {FindMinInRotateArray} from '../Search/FindMinInRotateArray'
import {SearchRange} from '../Search/SearchRange'
import {FindClosestElements} from '../Search/FindClosestElements'
import {NextGreatestLetter} from '../Search/NextGreatestLetter'
import {GetNumberOfK} from '../Search/GetNumberOfK'

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

test('FindMin', () => {
    expect(FindMinInRotateArray([4,5,6,7,0,1,2])).toBe(0)
})

test('SearchRange', () => {
    expect(SearchRange([5,7,7,8,8,10], 8)).toEqual([3,4])
    expect(SearchRange([5,7,7,8,8,10], 6)).toEqual([-1,-1])
})

test('FindClosestElements', () => {
    expect(FindClosestElements([1,2,3,4,5], 4, 3)).toEqual([1,2,3,4])
})

test('NextGreatestLetter', () => {
    expect(NextGreatestLetter(['c', 'f', 'j'], 'a')).toBe('c')
    expect(NextGreatestLetter(['c', 'f', 'j'], 'd')).toBe('f')
    expect(NextGreatestLetter(['c', 'f', 'j'], 'g')).toBe('j')
})

test('GetNumberOfK', () => {
    expect(GetNumberOfK([1,2,3,4,5,5,5,5,6,7,8,9], 5)).toBe(4);
    expect(GetNumberOfK([1,2,3,4,5,5,5,5,6,7,8,9], 10)).toBe(0);
})