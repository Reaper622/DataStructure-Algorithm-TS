import { List } from '../LinkList/LinkList.js'
import ReverseList from '../LinkList/ReverseList.js'
import MergeList from '../LinkList/MergeList.js'

test('LinkList', () => {
    let list = new List([1,2,3])
    list.insert(4,3)
    expect(list.find(1).val).toBe(2)
    expect(list.PositiveTraverse()).toEqual([1,2,3,4])
    expect(list.NegativeTraverse()).toEqual([4,3,2,1])
    list.delete(1)
    expect(list.PositiveTraverse()).toEqual([1,3,4])
    let reverseListHead = ReverseList(list.head)
    let reverseList = new List()
    reverseList.head = reverseListHead
    expect(reverseList.PositiveTraverse()).toEqual([4,3,1])
})


test('MergeList', () => {
    let list1 = new List([1,3,5])
    let list2 = new List([2,4,6])
    let list3 = MergeList(list1.head, list2.head)
    expect(list3.PositiveTraverse()).toEqual([1,2,3,4,5,6])
})