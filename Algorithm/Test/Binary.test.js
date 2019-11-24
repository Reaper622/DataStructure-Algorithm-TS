import {NumberOfOne, NumberOfOneBetter} from '../Binary/NumberOfOne'

test('NumberOfOne', () => {
    let num = 0b01010111
    expect(NumberOfOne(num)).toBe(5)
    expect(NumberOfOneBetter(num)).toBe(5)
})