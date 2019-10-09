"use strict";
exports.__esModule = true;
/**
 * 判断是否为对称二叉树
 * 对称二叉树条件为：
 * - 两个根节点相等
 * - 左子树的右节点和右子树的左节点相同
 * - 右子树的左节点和左子树的右节点相同
 *
 * @param {Tree} tree
 */
function isSymmetry(tree) {
    return isSymmetryTree(tree.root.left, tree.root.right);
}
/**
 * 判断是否为对称二叉树
 * 对称二叉树条件为：
 * - 两个根节点相等
 * - 左子树的右节点和右子树的左节点相同
 * - 右子树的左节点和左子树的右节点相同
 *
 * @param {TreeNode} node1
 * @param {TreeNode} node2
 */
function isSymmetryTree(node1, node2) {
    // 如果两个根节点都不存在
    if (!node1 && !node2) {
        return true;
    }
    // 如果只有一个根节点不存在
    else if (!node1 || !node2) {
        return false;
    }
    // 如果根节点值不相同
    else if (node1.val !== node2.val) {
        return false;
    }
    //向下递归调用
    return isSymmetryTree(node1.left, node2.right) && isSymmetryTree(node1.right, node2.left);
}
exports["default"] = isSymmetry;
