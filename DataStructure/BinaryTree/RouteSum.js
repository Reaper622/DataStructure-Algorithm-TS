"use strict";
exports.__esModule = true;
/**
 *  计算是否有一条路径上的总和等于目标和
 * @param {TreeNode} root
 * @param {number} sum
 */
function RouteSum(root, sum) {
    var getSum = function (root, sum, total) {
        // 判断是否为叶子节点，若是叶子节点计算当前路径上的和
        if (!root.left && !root.right) {
            total += root.val;
            if (total === sum) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            // 如果只存在左子树
            if (root.left && !root.right) {
                return getSum(root.left, sum, total + root.val);
            }
            // 如果只存在右子树
            else if (root.right && !root.left) {
                return getSum(root.right, sum, total + root.val);
            }
            else {
                return (getSum(root.left, sum, total + root.val) || getSum(root.right, sum, total + root.val));
            }
        }
    };
    // 如果传入的是空树
    if (!root || root.val === undefined) {
        return false;
    }
    return getSum(root, sum, 0);
}
exports["default"] = RouteSum;
