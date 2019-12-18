"use strict";
exports.__esModule = true;
/**
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。
 *（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
    if (!root)
        return [];
    // 使用 queue 来存储当前层级的节点
    var result = [], queue = [root];
    // 是否是偶数列的标志
    var even = false;
    while (queue.length) {
        var levelSize = queue.length;
        var currentLevel = [];
        while (levelSize--) {
            var node = queue.shift();
            currentLevel.push(node.val);
            // 在当前层级推入一个结点时，把它的左右子结点推入队列中
            if (node.left && node.left.val !== null)
                queue.push(node.left);
            if (node.right && node.right.val !== null)
                queue.push(node.right);
        }
        if (even) {
            result.push(currentLevel.reverse());
        }
        else {
            result.push(currentLevel);
        }
        // 转换奇偶数列状态
        even = !even;
    }
    return result;
}
exports.zigzagLevelOrder = zigzagLevelOrder;
