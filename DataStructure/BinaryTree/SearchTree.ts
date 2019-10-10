import { TreeNode } from './BinaryTree'

// 二叉搜索树
class SearchTree {
    root: TreeNode
    constructor(array: number[]) {
        for(let i = 0; i < array.length; i++) {
            if (i === 0) {
                this.root = new TreeNode(array[i])
            }
            this.add(this.root, array[i])
        }

    }

    public  add (root: TreeNode, value: number):void {
        if (root.val > value && root.left === undefined) {

            root.left = new TreeNode(value)
        } else if (root.val < value && root.right === undefined) {
            root.right = new TreeNode(value)
        } else if (root.val > value && root.left !== undefined) {
            this.add(root.left, value)
        } else if (root.val < value && root.right !== undefined) {
            this.add(root.right, value)
        }
    }
}

export default SearchTree