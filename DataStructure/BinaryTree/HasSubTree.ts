import {TreeNode} from './BinaryTree'
/**
 * 输入两个二叉树，判断tree2是否为tree1的子结构。
 * @param {TreeNode} tree1 
 * @param {TreeNode} tree2 
 * @return {boolean}
 */
function HasSubTree(tree1: TreeNode, tree2: TreeNode): boolean {
    if (tree1 === null && tree2 === null) return true
    if (tree1 === null || tree2 === null) return false
    if (tree1 !== null && tree2 !== null) {
        // 如果找到节点与tree2根节点相等
        if (tree1.val === tree2.val) {
            return HasSubTreeHelper(tree1, tree2) || HasSubTree(tree1.left, tree2) || HasSubTree(tree1.right, tree2)
        }
    }

    return HasSubTree(tree1.left, tree2) || HasSubTree(tree1.right, tree2)
}

/**
 * 找到相同的根结点后 开始遍历查看两个树结构是否相同。
 * @param {TreeNode} tree1 
 * @param {TreeNode} tree2 
 * @return {boolean}
 */
function HasSubTreeHelper(tree1: TreeNode, tree2: TreeNode): boolean {
    // 均为空则相等
    if (!tree1 && !tree2)
        return true
    // 一空一不空则不想等
    if (!tree1 || !tree2)
        return false
    // 值相等 则递归判断
    if (tree1.val === tree2.val) {
        return HasSubTreeHelper(tree1.left, tree2.left) && HasSubTreeHelper(tree1.right, tree2.right)
    }

    return false
}

export {HasSubTree}