// 二叉树节点类
class TreeNode {
    val: any //节点内容
    left: TreeNode //左子树
    right: TreeNode // 右子树


    constructor(val:any) {
        this.val = val
        this.left = this.right = undefined
    }
}

// 二叉树类
class Tree <T> {
    root : TreeNode

    constructor (data: T[]){
        // 临时存储所有节点，方便寻找父子节点
        let nodeList : TreeNode[] = []
        // 顶节点
        for(let i = 0, len = data.length; i < len; i++) {
            let node = new TreeNode(data[i]);
            nodeList.push(node);
            
            if (i > 0) {
                // 计算节点所在层级的指数 即每一层都是 2^k-1 个  k为层数 n = k -1
                let n : number = Math.floor(Math.sqrt(i+1))
                // 当前层的启始值
                let q = Math.pow(2, n) - 1 // 索引值 减一
                // 记录上一层的起始点
                let p = Math.pow(2, n-1) - 1 //索引值 减一
                // 找到当前节点的父节点
                let parent: TreeNode = nodeList[p + Math.floor((i - q) / 2)]
                // 将当前节点和上一次节点做关联
                if (parent.left !== undefined) {
                    parent.right = node
                } else {
                    parent.left = node
                }
            }
        }
        this.root = nodeList.shift()
        nodeList.length = 0
    }
    // 中序遍历递归实现
    public inOrderTraversal (root : TreeNode, array : T[]) : T[] {
        if (root) {
            this.inOrderTraversal(root.left, array)
            array.push(root.val)
            this.inOrderTraversal(root.right, array)
        }
        return array
    }

    // 先序遍历递归实现
    public preOrderTraversal (root : TreeNode, array: T[]) : T[] {
        if (root) {
            array.push(root.val)
            this.preOrderTraversal(root.left, array)
            this.preOrderTraversal(root.right, array)
        }
        return array
    }

    // 后序遍历递归实现
    public postOrderTraversal (root: TreeNode, array: T[]) : T[] {
        if (root) {
            this.postOrderTraversal(root.left, array)
            this.postOrderTraversal(root.right, array)
            array.push(root.val)
        }
        return array
    }
    
    // 计算二叉树的深度
    public treeDepth (root: TreeNode) : number {
        // 一个二叉树的深度为 左子树深度和右子树深度的最大值 + 1
        return (root === undefined || root.val === null)  ? 0 : Math.max(this.treeDepth(root.left), this.treeDepth(root.right)) + 1
    }

    // 计算二叉树的最小深度
    public minDepth (root: TreeNode) : number {
        if (root === undefined || root.val === null) {
            return 0
        }
        let left = this.minDepth(root.left)
        let right = this.minDepth(root.right)
        return (left && right) ? 1 + Math.min(left, right) : 1 + left + right
    }

    // 判断二叉树是否为平衡二叉树
    public isBalanced (root: TreeNode) : boolean {
        if (!root || root.val === null) {
            return true;
        }
        let left = this.isBalanced(root.left)
        let right = this.isBalanced(root.right)
        // 如果存在不平衡情况即都不平衡
        if (left === false || right === false || Math.abs(this.treeDepth(this.root.left) - this.treeDepth(this.root.right)) > 1) {
            return false
        }
        return true
    }

    // 二叉树层次遍历
    public levelTraversal (root: TreeNode) : number[][] | number[] {
        if (!root) return []
        // 使用 queue 来存储当前层级的节点
        let result = [], queue = [root]
        while (queue.length) {
            let levelSize = queue.length
            let currentLevel = []
            while (levelSize--) {
                let node = queue.shift()
                currentLevel.push(node.val)
                if (node.left && node.left.val !== null) queue.push(node.left)
                if (node.right && node.right.val !== null) queue.push(node.right)
            }
            result.push(currentLevel)
        }
        return result
    }


}

export default Tree

export {
    TreeNode
}