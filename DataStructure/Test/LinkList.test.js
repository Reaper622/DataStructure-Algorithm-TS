import { List } from '../LinkList/LinkList.js'

test('LinkList', () => {
    let list = new List([1,2,3])
    list.insert(4,3)
    expect(list.find(1).val).toBe(2)
    expect(list.PositiveTraverse()).toEqual([1,2,3,4])
    expect(list.NegativeTraverse()).toEqual([4,3,2,1])
    list.delete(1)
    expect(list.PositiveTraverse()).toEqual([1,3,4])
})