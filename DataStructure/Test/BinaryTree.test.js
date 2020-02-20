import  Tree, {TreeNode} from '../BinaryTree/BinaryTree.js'
import isSymmetry from '../BinaryTree/Symmetry.js'
import Mirror from '../BinaryTree/Mirror.js'
import {buildTreeByPreAndIn, buildTreeByPostAndIn} from '../BinaryTree/BuildTree.js'
import {RouteSum, RouteSumWithRoute} from '../BinaryTree/RouteSum.js'
import {HasSubTree} from '../BinaryTree/HasSubTree'
import {verifySquenceOfBTS} from '../BinaryTree/VerifySquenceOfBST'
import {zigzagLevelOrder} from '../BinaryTree/ZigzagLevelOrder'

let arr = [1,2,3]
let arr2 = [1,2,2,3,4,4,3]

let arr3 = [1,2,3,4,5,6,7]
let arr4 = [1,3,2,7,6,5,4]

let result1 = []
let result2 = []
let result3 = []
let tree = new Tree(arr);
let summetryTree = new Tree(arr2)

let treeToBeMirrored = new Tree(arr3)
let MirroredTree = new Tree(arr4)



test('binary', () => {
    expect(tree.root.val).toBe(1);
    expect(tree.root.left.val).toBe(2);
    expect(tree.inOrderTraversal(tree.root, result1)).toEqual([2,1,3])
    expect(tree.inOrderTraversal2(tree.root, result1)).toEqual([2,1,3])
    expect(tree.preOrderTraversal(tree.root, result2)).toEqual([1,2,3])
    expect(tree.preOrderTraversal2(tree.root, result2)).toEqual([1,2,3])
    expect(tree.postOrderTraversal(tree.root, result3)).toEqual([2,3,1])
    expect(tree.postOrderTraversal2(tree.root, result3)).toEqual([2,3,1])
})

test('depth', () => {
    expect(tree.treeDepth(tree.root)).toBe(2);
    expect(summetryTree.treeDepth(summetryTree.root)).toBe(3)
    let arr = [1,null,2,null,null,null,null]
    let treeDep = new Tree(arr)
    expect(treeDep.treeDepth(treeDep.root)).toBe(2)
    arr = [3,9,20,null,null,15,7]
    let treeDep2 = new Tree(arr)
    expect(treeDep2.minDepth(tree.root)).toBe(2)
})
test('balanced', () => {
    expect(tree.isBalanced(tree.root)).toBe(true)
    let arrNoBalance = [1,2,2,3,3,null,null,4,4]
    let treeNoBalance = new Tree(arrNoBalance)
    expect(treeNoBalance.isBalanced(treeNoBalance)).toBe(false)
})

test('levelTraversal', () => {
    let arr = [3,9,20,null,null,15,7]
    let tree = new Tree(arr)
    expect(tree.levelTraversal(tree.root)).toEqual([[3],[9,20],[15,7]])
})
test('isSymmetry', () => {
    expect(isSymmetry(summetryTree)).toBe(true)
})

test('Mirror', () => {
    Mirror(treeToBeMirrored.root)
    expect(treeToBeMirrored.root).toEqual(MirroredTree.root)
})

test('buildTree', () => {
    let preOrder = [3,9,20,15,7]
    let inOrder = [9,3,15,20,7]
    let postOrder = [9,15,7,20,3]
    let tree = new Tree([3,9,20,null,null,15,17])
    let root1 = buildTreeByPreAndIn(preOrder, inOrder)
    let root2 = buildTreeByPostAndIn(postOrder, inOrder)
    let result1 = []
    let result2 = []
    let result3 = []
    let result4 = []
    expect(tree.preOrderTraversal(root1, result1)).toEqual(preOrder)
    expect(tree.inOrderTraversal(root1, result2)).toEqual(inOrder)
    expect(tree.inOrderTraversal(root2, result3)).toEqual(inOrder)
    expect(tree.postOrderTraversal(root2, result4)).toEqual(postOrder)
})


test('RouteSum', () => {
    let arr = [5,4,5,11,null,13,4,7,2,null,null,null,1]
    let tree = new Tree(arr)
    expect(RouteSum(tree.root, 22)).toBe(true)
})

test('HasSubTree', () => {
    let tree1 = new Tree([1,2,3,4,5,6])
    let tree2 = new Tree([2,4,5])
    expect(HasSubTree(tree1.root, tree2.root)).toBe(true)
})

test('VerifySquenceOfBST', () => {
    expect(verifySquenceOfBTS([5,7,6,9,11,10,8])).toBe(true)
    expect(verifySquenceOfBTS([7,4,6,5])).toBe(false)
})

test('ZigzagLevelOrder', () => {
    let arr = [3,9,20,null,null,15,7];
    let tree = new Tree(arr);
    expect(zigzagLevelOrder(tree.root)).toEqual([[3],[20,9],[15,7]]);
})

