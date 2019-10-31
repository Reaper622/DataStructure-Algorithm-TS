import {BinarySearch} from '../Search/BinarySearch'
import {Sqrt} from '../Search/Sqrt'

test('BinarySearch', () => {
    expect(BinarySearch([-1,0,3,5,9,12], 9)).toBe(4)
})

test('Sqrt', () => {
    expect(Sqrt(9)).toBe(3)
    expect(Sqrt(16)).toBe(4)
})