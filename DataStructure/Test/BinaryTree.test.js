import  Tree from '../BinaryTree/BinaryTree.js'

let arr = [1,2,3]

let result1 = []
let result2 = []
let result3 = []
let tree = new Tree(arr);


test('binary', () => {
    expect(tree.root.val).toBe(1);
    expect(tree.root.left.val).toBe(2);
    expect(tree.inOrderTraversal(tree.root, result1)).toEqual([2,1,3])
    expect(tree.preOrderTraversal(tree.root, result2)).toEqual([1,2,3])
    expect(tree.postOrderTraversal(tree.root, result3)).toEqual([2,3,1])
})