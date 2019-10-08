"use strict";
exports.__esModule = true;
// 二叉树节点类
var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = undefined;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
// 二叉树类
var Tree = /** @class */ (function () {
    function Tree(data) {
        // 临时存储所有节点，方便寻找父子节点
        var nodeList = [];
        // 顶节点
        var root;
        for (var i = 0, len = data.length; i < len; i++) {
            var node = new TreeNode(data[i]);
            nodeList.push(node);
            if (i > 0) {
                // 计算节点所在层级
                var n = Math.floor(Math.sqrt(i + 1));
                // 当前层的启始值
                var q = Math.pow(2, n) - 1; // 索引值 减一
                // 记录上一层的起始点
                var p = Math.pow(2, n - 1) - 1; //索引值 减一
                // 找到当前节点的父节点
                var parent_1 = nodeList[p + Math.floor((i - q) / 2)];
                // 将当前节点和上一次节点做关联
                if (parent_1.left !== undefined) {
                    parent_1.right = node;
                }
                else {
                    parent_1.left = node;
                }
            }
        }
        this.root = nodeList.shift();
        nodeList.length = 0;
    }
    // 中序遍历递归实现
    Tree.prototype.inOrderTraversal = function (root, array) {
        if (root) {
            this.inOrderTraversal(root.left, array);
            array.push(root.val);
            this.inOrderTraversal(root.right, array);
        }
        return array;
    };
    // 先序遍历递归实现
    Tree.prototype.preOrderTraversal = function (root, array) {
        if (root) {
            array.push(root.val);
            this.preOrderTraversal(root.left, array);
            this.preOrderTraversal(root.right, array);
        }
        return array;
    };
    // 后序遍历递归实现
    Tree.prototype.postOrderTraversal = function (root, array) {
        if (root) {
            this.postOrderTraversal(root.left, array);
            this.postOrderTraversal(root.right, array);
            array.push(root.val);
        }
        return array;
    };
    return Tree;
}());
exports["default"] = Tree;