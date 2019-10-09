"use strict";
exports.__esModule = true;
/**
 * 使一个二叉树变化为他的镜像
 * 即交换左右节点位置
 *
 * @param {TreeNode} root
 */
function Mirror(root) {
    if (root) {
        var temp = root.right;
        root.right = root.left;
        root.left = temp;
        Mirror(root.right);
        Mirror(root.left);
    }
}
exports["default"] = Mirror;
