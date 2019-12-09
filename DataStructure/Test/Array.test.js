import {FindNumWithSum} from '../Array/FindNumWithSum'
import {FindContinousSequence} from '../Array/FindContinousSequence'
import {SumTwoNumbers} from '../Array/SumTwoNumbers'
import {SumThreeNumbers} from '../Array/SumThreeNumbers'
import {SumFourNumbers} from '../Array/SumFourNumbers'
import {PrintMatrix} from '../Array/PrintMatrix'
import {PrintDiagonal} from '../Array/PrintDiagonal'
import {MoreThanHalfNum, MoreThanHalfNum2} from '../Array/MoreThanHalf'
import {FindGreatestSum} from '../Array/FindGreatestSum'
import {ReverseString} from '../Array/Reverse'
import {MoveZero} from '../Array/MoveZero'
import {ReorderOddEven} from '../Array/ReorderOddEven'
import {IsContinuous} from '../Array/IsContinous'
import {maxAreaOfIsland} from '../Array/MaxAreaOfIsland'

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

test('PrintMartix', () => {
    expect(PrintMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])).toEqual([1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10])
})

test('PrintDiagonal', () => {
    expect(PrintDiagonal([[ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ]])).toEqual([1,2,4,7,5,3,6,8,9])
})

test('MoreThanHalf', () => {
    expect(MoreThanHalfNum([1,2,2,2,2,3,4])).toBe(2)
    expect(MoreThanHalfNum2([1,2,2,2,2,3,4])).toBe(2)
})

test('FindGreatestSum', () => {
    expect(FindGreatestSum([6,-3,-2,7,-15,1,2,2])).toBe(8)
})

test('ReverseString', () => {
    expect(ReverseString(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"])
})

test('MoveZero', () => {
    expect(MoveZero([1,0,12,3,4,0,5,2])).toEqual([1,12,3,4,5,2,0,0])
})

test('ReorderOddEven', () => {
    expect(ReorderOddEven([1,3,4,5,6,7,8])).toEqual([1,3,7,5,6,4,8])
})

test('IsContinous', () => {
    expect(IsContinuous([1,3,4,5,0])).toBe(true)
    expect(IsContinuous([1,3,4,5,7])).toBe(false)
    expect(IsContinuous([0,1,4,2,4])).toBe(false)
})

test('MaxAreaOfIsland', () => {
    expect(maxAreaOfIsland(
        [[0,0,1,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,1,1,0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,1,1,0,0,1,0,1,0,0],
        [0,1,0,0,1,1,0,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0]])).toBe(6);
    expect(maxAreaOfIsland([[0,0,0,0,0,0,0,0]])).toBe(0);
})