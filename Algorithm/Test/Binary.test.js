import {NumberOfOne, NumberOfOneBetter} from '../Binary/NumberOfOne'
import {FindNumberAppearOnce} from '../Binary/FindNumberAppearOnce'
import {StrictAdd} from '../Binary/StrictAdd'
import {plus, minus, multiply, divide} from '../Binary/PlusMinusMultiplyDivide'

test('NumberOfOne', () => {
    let num = 0b01010111
    expect(NumberOfOne(num)).toBe(5)
    expect(NumberOfOneBetter(num)).toBe(5)
})

test('FindNumberAppearOnce', () => {
    expect(FindNumberAppearOnce([1,1,2,2,30,30,22,22,13])).toBe(13);
})

test('StrictAdd', () => {
    expect(StrictAdd(5,17)).toBe(22)
})

test('PlusMinusMuliplyDivide', () => {
    expect(plus(100, 120)).toBe(220);
    expect(minus(100, 20)).toBe(80);
    expect(minus(20, 30)).toBe(-10);
    expect(multiply(2,10)).toBe(20);
    expect(divide(11, 2)).toBe(5);
})