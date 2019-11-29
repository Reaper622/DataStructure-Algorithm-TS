"use strict";
exports.__esModule = true;
/**
 * 判断输入序列是否为一颗二叉搜索树的后序遍历序列。
 * @param {number} sequence
 * @return {boolean}
 */
function verifySquenceOfBTS(sequence) {
    // 判断是否为空
    if (!sequence) {
        return false;
    }
    var len = sequence.length;
    // 获取根结点，由于是后序遍历序列，最后一个节点即为根结点
    var root = sequence[len - 1];
    // 在二叉搜索树中，左子树的结点都小于根结点
    var l = 0;
    for (; l < len - 1; l++) {
        // 如果有比根结点大的则停止
        if (sequence[l] > root) {
            break;
        }
    }
    // 在二叉搜索树中，右子树的结点都大于根结点
    var r = l;
    for (; r < len - 1; r++) {
        // 如果右子树中有比根结点小的 则证明这不是一个二叉搜索树的后序遍历序列
        if (sequence[r] < root) {
            return false;
        }
    }
    var left = true, right = true;
    // 如果有左子树 递归判断左子树是否为二叉搜索树
    if (l > 0) {
        left = verifySquenceOfBTS(sequence.slice(0, l));
    }
    // 如果有右子树 递归判断右子树是否为二叉搜索树
    if (l < len - 1) {
        right = verifySquenceOfBTS(sequence.slice(l, len - 1));
    }
    return (left && right);
}
exports.verifySquenceOfBTS = verifySquenceOfBTS;
