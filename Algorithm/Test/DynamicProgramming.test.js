import Tribonacci from '../DynamicProgramming/Tribonacci'
import {YanghuiTriangle} from '../DynamicProgramming/YanghuiTriangle'


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