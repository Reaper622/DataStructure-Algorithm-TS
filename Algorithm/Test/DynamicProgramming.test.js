import Tribonacci from '../DynamicProgramming/Tribonacci'
import {YanghuiTriangle} from '../DynamicProgramming/YanghuiTriangle'
import {Rob, Rob2} from '../DynamicProgramming/Theif'
import {TheNOfTheUglyNumber} from '../DynamicProgramming/TheNOfTheUglyNumber'


test('Tribonacci', () => {
    expect(Tribonacci(25)).toBe(1389537)
})

test('YanghuiTriangle', () => {
    expect(YanghuiTriangle(5)).toEqual([
        [1],
       [1,1],
      [1,2,1],
     [1,3,3,1],
    [1,4,6,4,1]
   ])
})

test('Theif', () => {
    expect(Rob([2,7,9,3,1])).toBe(12)
    expect(Rob2([2,7,9,3,1])).toBe(11)
})

test('TheNOfTheUglyNumber', () => {
    expect(TheNOfTheUglyNumber(10)).toBe(12)
})