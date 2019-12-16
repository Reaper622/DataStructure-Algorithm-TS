import { List } from '../LinkList/LinkList'
import {ReverseList, ReverseBetween} from '../LinkList/ReverseList'
import MergeList from '../LinkList/MergeList'
import DeleteNFromEnd from '../LinkList/DeleteN'
import RotateRight from '../LinkList/RotateRight'
import Exchange from '../LinkList/Exchange'
import SeparateList from '../LinkList/SeparateList'
import ReorderList from '../LinkList/ReorderList'
import {LinkListMiddle} from '../LinkList/LinkListMiddle'
import {FirstSameNode} from '../LinkList/FirstSameNode'
import {listSum} from '../LinkList/ListSum'
import {sortList} from '../LinkList/SortList'
import {MergeKList} from '../LinkList/MergeKList'

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


test('ReverseBetween', () => {
    let list = new List([1,2,3,4,5])
    list.head = ReverseBetween(list.head, 2, 4)
    expect(list.PositiveTraverse()).toEqual([1,4,3,2,5])
})

test('ReorderList', () => {
    let list = new List([1,2,3,4])
    list.head = ReorderList(list.head)
    expect(list.PositiveTraverse()).toEqual([1,4,2,3])
})

test('LinkListMiddle', () => {
    let list = new List([1,2,3,4,5])
    let list2 = new List([1,2,3,4,5,6])
    expect(LinkListMiddle(list.head).val).toBe(3)
    expect(LinkListMiddle(list2.head).val).toBe(4)
})

test('FirstSameNode', () => {
    let list1 = new List([7,8,9,10,5])
    let list2 = new List([1,2,3,4,5])
    expect(FirstSameNode(list1.head, list2.head).val).toBe(5)
})

test('ListSum', () => {
    let list1 = new List([2,4,3]);
    let list2 = new List([5,6,4]);
    let list = new List();
    list.head = listSum(list1.head, list2.head);
    expect(list.PositiveTraverse()).toEqual([7,0,8]);
})

test('SortList', () => {
    let list = new List([1,4,3,2]);
    let result = new List();
    result.head = sortList(list.head);
    expect(result.PositiveTraverse()).toEqual([1,2,3,4]);
})

test('MergeKList', () => {
    let list1 = new List([1,4,5]);
    let list2 = new List([1,3,4]);
    let list3 = new List([2,6]);
    let lists = [list1.head, list2.head, list3.head];
    let result = new List();
    result.head = MergeKList(lists);
    expect(result.PositiveTraverse()).toEqual([1,1,2,3,4,4,5,6]);
})