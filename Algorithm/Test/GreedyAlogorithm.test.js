import {maxProfitOnce, maxProfitMore, maxProfitWithFee} from '../GreedyAlgorithm/Stock'
import { DeliverBiscuits } from '../GreedyAlgorithm/Biscuits'
import { maxSquare } from '../GreedyAlgorithm/MaxSquare'

test('maxProfit', () => {
    expect(maxProfitOnce([7,1,5,3,6,4])).toBe(5)
    expect(maxProfitOnce([7,6,4,3,1])).toBe(0)
    expect(maxProfitMore([7,1,5,3,6,4])).toBe(7)
    expect(maxProfitWithFee([1, 3, 2, 8, 4, 9], 2)).toBe(8)
})

test('Biscuit', () => {
    expect(DeliverBiscuits([1,2,3], [1,1])).toBe(1)
    expect(DeliverBiscuits([1,2,3], [1,2])).toBe(2)
    expect(DeliverBiscuits([1,2,3,4], [3,3,3])).toBe(3)
}) 

test('MaxSquare', () => {
    expect(maxSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])).toBe(4)
})