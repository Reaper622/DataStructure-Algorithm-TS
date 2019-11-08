import {FindNumWithSum} from '../Array/FindNumWithSum'
import {FindContinousSequence} from '../Array/FindContinousSequence'
import {SumTwoNumbers} from '../Array/SumTwoNumbers'
import {SumThreeNumbers} from '../Array/SumThreeNumbers'
import {SumFourNumbers} from '../Array/SumFourNumbers'

test('FindNumWithSum', () => {
    expect(FindNumWithSum([1,2,3,4,5,6,7,8], 11)).toEqual([3,8])
})

test('FindCountinousSequence', () => {
    expect(FindContinousSequence(15)).toEqual([[1,2,3,4,5], [4,5,6], [7,8]])
})

test('SumTwoNums', () => {
    expect(SumTwoNumbers([2,7,11,15], 9)).toEqual([0,1])
})

test('SumThreeNumbers', () => {
    expect(SumThreeNumbers([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2],[-1, 0, 1]])
})

test('SumFourNumbers', () => {
    expect(SumFourNumbers([-1,0,-5,-2,-2,-4,0,1,-2],-9)).toEqual([[-5,-4,-1,1],[-5,-4,0,0],[-5,-2,-2,0],[-4,-2,-2,-1]])
})