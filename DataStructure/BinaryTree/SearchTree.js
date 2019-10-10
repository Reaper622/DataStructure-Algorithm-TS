"use strict";
exports.__esModule = true;
var BinaryTree_1 = require("./BinaryTree");
// 二叉搜索树
var SearchTree = /** @class */ (function () {
    function SearchTree(array) {
        for (var i = 0; i < array.length; i++) {
            if (i === 0) {
                this.root = new BinaryTree_1.TreeNode(array[i]);
            }
            this.add(this.root, array[i]);
        }
    }
    SearchTree.prototype.add = function (root, value) {
        if (root.val > value && root.left === undefined) {
            root.left = new BinaryTree_1.TreeNode(value);
        }
        else if (root.val < value && root.right === undefined) {
            root.right = new BinaryTree_1.TreeNode(value);
        }
        else if (root.val > value && root.left !== undefined) {
            this.add(root.left, value);
        }
        else if (root.val < value && root.right !== undefined) {
            this.add(root.right, value);
        }
    };
    return SearchTree;
}());
exports["default"] = SearchTree;
