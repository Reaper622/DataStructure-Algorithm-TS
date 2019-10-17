import { List } from '../LinkList/LinkList'
import ReverseList from '../LinkList/ReverseList'
import MergeList from '../LinkList/MergeList'
import DeleteNFromEnd from '../LinkList/DeleteN'
import RotateRight from '../LinkList/RotateRight'
import Exchange from '../LinkList/Exchange'
import SeparateList from '../LinkList/SeparateList'

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
    let list2 = new List([1,2,3,3,4,5])
    list2.DeleteDuplicates()
    expect(list2.PositiveTraverse()).toEqual([1,2,3,4,5])
})


test('MergeList', () => {
    let list1 = new List([1,3,5])
    let list2 = new List([2,4,6])
    let list3 = MergeList(list1.head, list2.head)
    expect(list3.PositiveTraverse()).toEqual([1,2,3,4,5,6])
})

test('DeleteNFromEnd', () => {
    let list = new List([1,2,3,4,5])
    list.head = DeleteNFromEnd(list.head, 2)
    expect(list.PositiveTraverse()).toEqual([1,2,3,5])
})

test('RotateRight', () => {
    let list = new List([1,2,3,4,5])
    list.head = RotateRight(list.head, 2)
    expect(list.PositiveTraverse()).toEqual([4,5,1,2,3])
})

test('Exchange', () => {
    let list = new List([1,2,3,4])
    list.head = Exchange(list.head)
    expect(list.PositiveTraverse()).toEqual([2,1,4,3])
})

test('SeparateList', () => {
    let list = new List([1,4,3,2,5,2])
    list.head = SeparateList(list.head, 3)
    expect(list.PositiveTraverse()).toEqual([1,2,2,4,3,5])
})