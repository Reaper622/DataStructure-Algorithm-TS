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
        for (var i = 0, len = data.length; i < len; i++) {
            var node = new TreeNode(data[i]);
            nodeList.push(node);
            if (i > 0) {
                // 计算节点所在层级的指数 即每一层都是 2^k-1 个  k为层数 n = k -1
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
    // 中序遍历非递归实现
    Tree.prototype.inOrderTraversal2 = function (root) {
        var arr = [];
        var stack = [];
        var node = root;
        while (node || stack.length > 0) {
            // 如果node存在
            if (node) {
                // node先入栈 之后访问它的左子树
                stack.push(node);
                node = node.left;
            }
            // node 不存在
            else {
                // 获取栈顶元素
                node = stack.pop();
                // 结果添加元素值
                arr.push(node.val);
                // 获取右子树 开始遍历
                node = node.right;
            }
        }
        return arr;
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
    // 先序遍历非递归实现
    Tree.prototype.preOrderTraversal2 = function (root) {
        var arr = [];
        var stack = [];
        // 栈内存放root根节点
        stack.push(root);
        while (stack.length > 0) {
            var node = stack.pop();
            // 首先传入根节点的值
            arr.push(node.val);
            // 向栈内推送 右子树和左子树 使左子树在右子树上
            if (node.right !== undefined)
                stack.push(node.right);
            if (node.left !== undefined)
                stack.push(node.left);
        }
        return arr;
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
    // 后续遍历非递归实现
    Tree.prototype.postOrderTraversal2 = function (root) {
        var arr = [];
        var stack = [];
        var node = root;
        var right = null;
        while (node || stack.length > 0) {
            if (node) {
                // 首先推入根节点
                stack.push(node);
                // 优先遍历左子树
                node = node.left;
            }
            else {
                node = stack[stack.length - 1];
                // 如果当前节点的右子树为上一次遍历的节点或者没有右子树 则直接读取
                if (node.right === right || node.right === undefined) {
                    arr.push(node.val);
                    right = node;
                    stack.pop();
                    node = null;
                }
                // 否则继续访问右子树
                else {
                    node = node.right;
                }
            }
        }
        return arr;
    };
    // 计算二叉树的深度
    Tree.prototype.treeDepth = function (root) {
        // 一个二叉树的深度为 左子树深度和右子树深度的最大值 + 1
        return (root === undefined || root.val === null) ? 0 : Math.max(this.treeDepth(root.left), this.treeDepth(root.right)) + 1;
    };
    // 计算二叉树的最小深度
    Tree.prototype.minDepth = function (root) {
        if (root === undefined || root.val === null) {
            return 0;
        }
        var left = this.minDepth(root.left);
        var right = this.minDepth(root.right);
        return (left && right) ? 1 + Math.min(left, right) : 1 + left + right;
    };
    // 判断二叉树是否为平衡二叉树
    Tree.prototype.isBalanced = function (root) {
        if (!root || root.val === null) {
            return true;
        }
        var left = this.isBalanced(root.left);
        var right = this.isBalanced(root.right);
        // 如果存在不平衡情况即都不平衡
        if (left === false || right === false || Math.abs(this.treeDepth(this.root.left) - this.treeDepth(this.root.right)) > 1) {
            return false;
        }
        return true;
    };
    // 二叉树层次遍历
    Tree.prototype.levelTraversal = function (root) {
        if (!root)
            return [];
        // 使用 queue 来存储当前层级的节点
        var result = [], queue = [root];
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
            result.push(currentLevel);
        }
        return result;
    };
    return Tree;
}());
exports["default"] = Tree;
