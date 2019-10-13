"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
exports.RouteSum = RouteSum;
function RouteSumWithRoute(root, sum) {
    var result = [];
    var getSumRoute = function (root, sum, total, array) {
        if (array === void 0) { array = []; }
        // 判断是否为叶子节点，若是叶子节点计算当前路径上的和
        if (!root.left && !root.right) {
            total += root.val;
            if (total === sum) {
                array.push(root.val);
                result.push(array);
            }
        }
        else {
            array.push(root.val);
            // 如果只存在左子树
            if (root.left && !root.right) {
                getSumRoute(root.left, sum, total + root.val, __spreadArrays(array));
            }
            // 如果只存在右子树
            else if (root.right && !root.left) {
                getSumRoute(root.right, sum, total + root.val, __spreadArrays(array));
            }
            else {
                getSumRoute(root.left, sum, total + root.val, __spreadArrays(array));
                getSumRoute(root.right, sum, total + root.val, __spreadArrays(array));
            }
        }
    };
    // 如果传入的是空树
    if (!root) {
        return [];
    }
    getSumRoute(root, sum, 0);
    return result;
}
exports.RouteSumWithRoute = RouteSumWithRoute;
