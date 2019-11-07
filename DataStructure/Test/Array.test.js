import {FindNumWithSum} from '../Array/FindNumWithSum'
import {FindContinousSequence} from '../Array/FindContinousSequence'

test('FindNumWithSum', () => {
    expect(FindNumWithSum([1,2,3,4,5,6,7,8], 11)).toEqual([3,8])
})

test('FindCountinousSequence', () => {
    expect(FindContinousSequence(15)).toEqual([[1,2,3,4,5], [4,5,6], [7,8]])
})