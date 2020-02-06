import Tribonacci from '../DynamicProgramming/Tribonacci'
import {YanghuiTriangle} from '../DynamicProgramming/YanghuiTriangle'
import {Rob, Rob2} from '../DynamicProgramming/Theif'
import {TheNOfTheUglyNumber} from '../DynamicProgramming/TheNOfTheUglyNumber'
import {maximalSquare} from '../DynamicProgramming/MaximalSquare'
import {minimumTotal} from '../DynamicProgramming/MinimumTotal'
import {maxEnvelopes} from '../DynamicProgramming/MaxEnvelopes'
import {productExceptSelf} from '../DynamicProgramming/ProductExpectSelf'


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

test('MaximalSquare', () => {
    expect(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])).toBe(4);
})

test('minimumTotal', () => {
    expect(minimumTotal([
        [2],
       [3,4],
      [6,5,7],
     [4,1,8,3]
   ])).toBe(11)
})


test('maxEnvelopes', () => {
    expect(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]])).toBe(3)
})

test('ProductExpectSelf', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6])
})