import {NumberOfOne, NumberOfOneBetter} from '../Binary/NumberOfOne'
import {FindNumberAppearOnce} from '../Binary/FindNumberAppearOnce'

test('NumberOfOne', () => {
    let num = 0b01010111
    expect(NumberOfOne(num)).toBe(5)
    expect(NumberOfOneBetter(num)).toBe(5)
})

test('FindNumberAppearOnce', () => {
    expect(FindNumberAppearOnce([1,1,2,2,30,30,22,22,13])).toBe(13);
})