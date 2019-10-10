import  Tree from '../BinaryTree/BinaryTree.js'
import isSymmetry from '../BinaryTree/Symmetry.js'
import Mirror from '../BinaryTree/Mirror.js'

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
    expect(tree.preOrderTraversal(tree.root, result2)).toEqual([1,2,3])
    expect(tree.postOrderTraversal(tree.root, result3)).toEqual([2,3,1])
})

test('depth', () => {
    expect(tree.treeDepth(tree.root)).toBe(2);
})

test('isSymmetry', () => {
    expect(isSymmetry(summetryTree)).toBe(true);
})

test('Mirror', () => {
    Mirror(treeToBeMirrored.root)
    expect(treeToBeMirrored.root).toEqual(MirroredTree.root)
})