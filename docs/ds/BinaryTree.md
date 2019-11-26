---
sidebar: auto
---

# 二叉树

> 二叉树是一种典型的树状结构，二叉树是每个结点最多有两个子树的树结构，通常被称为“左子树”与“右子树”。

## 二叉树的数据结构

首先我们定义二叉树结点的数据结构

> 以下相关代码在 BinaryTree.ts 中

```typescript
class TreeNode {
    val: any //结点内容
    left: TreeNode //左子树
    right: TreeNode // 右子树


    constructor(val:any) {
        this.val = val
        this.left = this.right = undefined
    }
}
```

接着我们定义二叉树的数据结构

```typescript
class Tree <T> {
    root : TreeNode

    constructor (data: T[]){
        // 临时存储所有结点，方便寻找父子结点
        let nodeList : TreeNode[] = []
        // 顶结点
        let root : TreeNode
        for(let i = 0, len = data.length; i < len; i++) {
            let node = new TreeNode(data[i]);
            nodeList.push(node);
            
            if (i > 0) {
                // 计算结点所在层级的指数 即每一层都是 2^k-1 个  k为层数 n = k -1
                let n : number = Math.floor(Math.sqrt(i+1))
                // 当前层的启始值
                let q = Math.pow(2, n) - 1 // 索引值 减一
                // 记录上一层的起始点
                let p = Math.pow(2, n-1) - 1 //索引值 减一
                // 找到当前结点的父结点
                let parent: TreeNode = nodeList[p + Math.floor((i - q) / 2)]
                // 将当前结点和上一次结点做关联
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
    

}
```

## 二叉树的中序遍历	

遍历顺序 左子树 >> 结点 >> 右子树

```typescript
// 在 Tree 类中
inOrderTraversal (root : TreeNode, array : T[]) : T[] {
        if (root) {
            this.inOrderTraversal(root.left, array)
            array.push(root.val)
            this.inOrderTraversal(root.right, array)
        }
        return array
    }
```

## 二叉树的先序遍历 

遍历顺序 结点 >> 左子树 >> 右子树

```typescript
// 在 Tree 类中
public preOrderTraversal (root : TreeNode, array: T[]) : T[] {
        if (root) {
            array.push(root.val)
            this.preOrderTraversal(root.left, array)
            this.preOrderTraversal(root.right, array)
        }
        return array
    }
```

 ##  二叉树的后序遍历 

遍历顺序 左子树 >> 右子树 >> 结点

```typescript
// 在 Tree 类中
public postOrderTraversal (root: TreeNode, array: T[]) : T[] {
        if (root) {
            this.postOrderTraversal(root.left, array)
            this.postOrderTraversal(root.right, array)
            array.push(root.val)
        }
        return array
    }
```

## 二叉树的深度
```typescript
// 在 Tree 类中
public treeDepth (root: TreeNode) : number {
        // 一个二叉树的深度为 左子树深度和右子树深度的最大值 + 1
        return (root === undefined || root.val === null)  ? 0 : Math.max(this.treeDepth(root.left), this.treeDepth(root.right)) + 1
    }
```

## 二叉树的最小深度
```typescript
// 在 Tree 类中
public minDepth (root: TreeNode) : number {
        if (root === undefined || root.val === null) {
            return 0
        }
        let left = this.minDepth(root.left)
        let right = this.minDepth(root.right)
        return (left && right) ? 1 + Math.min(left, right) : 1 + left + right
    }
```

## 判断是否为平衡二叉树
```typescript
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
```

## 判断是否为对称二叉树

> 此部分代码在 Symmetry.ts

对称二叉树的要求:

- 根结点相等
- 左子树的右结点和右子树的左结点相同。
- 右子树的左结点和左子树的右结点相同。

```typescript
import Tree, {TreeNode} from './BinaryTree'

/**
 * 判断是否为对称二叉树
 * 对称二叉树条件为：
 * - 根结点相等
 * - 左子树的右结点和右子树的左结点相同
 * - 右子树的左结点和左子树的右结点相同
 * 
 * @param {Tree} tree
 */
function isSymmetry (tree: Tree<Number>) : Boolean {
    return isSymmetryTree(tree.root.left, tree.root.right)
}
/**
 * 
 * @param {TreeNode} node1 
 * @param {TreeNode} node2
 */
function isSymmetryTree (node1 : TreeNode, node2: TreeNode ) : Boolean {
    // 如果两个结点都不存在
    if (!node1 && !node2) {
        return true;
    } 
    // 如果只有一个结点不存在
    else if (!node1 || !node2) {
        return false;
    }
    // 如果结点值不相同
    else if (node1.val !== node2.val) {
        return false;
    }

    //向下递归调用
    return isSymmetryTree(node1.left, node2.right) && isSymmetryTree(node1.right, node2.left);
}

export default isSymmetry
```

## 二叉树的镜像

> 此部分代码在 Mirror.ts

镜像即二叉树所有的的左右结点交换位置

```typescript
import {TreeNode} from './BinaryTree'

/**
 * 使一个二叉树变化为他的镜像
 * 即交换左右结点位置
 * 
 * @param {TreeNode} root 
 */
function Mirror (root: TreeNode) : void {
    if (root) {
        let temp = root.right;
        root.right = root.left;
        root.left = temp;
        Mirror(root.right);
        Mirror(root.left);
    }
}

export default Mirror
```



## 二叉树层次遍历

> 此部分代码在 Tree 类中

```typescript
// 二叉树层次遍历
    public levelTraversal (root: TreeNode) : number[][] | number[] {
        if (!root) return []
        // 使用 queue 来存储当前层级的结点
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
```



## 重建二叉树

> 此部分代码在 BuildTree.ts 中

### 根据先序遍历和中序遍历结果构建二叉树

```typescript
/**
 * 根据前序遍历与中序遍历序列构造二叉树
 * 
 * @param {number[]} preorder 先序遍历序列
 * @param {number[]} inorder 中序遍历序列
 * @return {TreeNode}
*/
function buildTreeByPreAndIn (preorder: number[], inorder: number[]): TreeNode {
    if (!preorder.length && !inorder.length) {
        return null;
    }
    // 前序遍历的第一个结点即为二叉树根结点
    let root = new TreeNode(preorder[0])
    // 获取根结点在中序序列中的位置
    let position = inorder.indexOf(root.val)
    // 中序遍历中根结点之前的结点为左子树结点
    let midLeft = inorder.slice(0, position)
    // 中序遍历中根结点之后的结点为右子树结点
    let midRight = inorder.slice(position+1)
    // 前序序列中根结点之后与中序遍历左子树结点相同长度为左子树
    let preLeft = preorder.slice(1, position + 1)
    // 前序序列中的右子树
    let preRight = preorder.slice(position + 1)
    // 递归生成左子树和右子树
    root.left = buildTreeByPreAndIn(preLeft, midLeft)
    root.right = buildTreeByPreAndIn(preRight, midRight)
    return root
}
```

### 根据中序遍历和后序遍历结果构建二叉树

```typescript
function buildTreeByPostAndIn (postOrder: number[], inOrder: number[]) : TreeNode {
    if (!postOrder.length && !inOrder.length) {
        return null
    }
    // 后序遍历的最后一个结点为根结点
    let root = new TreeNode(postOrder[postOrder.length - 1])
    // 获取根结点在中序遍历中的位置
    let position = inOrder.indexOf(root.val)
    // 中序序列根结点之前的均为左子树
    let midLeft = inOrder.slice(0, position)
    // 中序序列根结点之后的均为右子树
    let midRight = inOrder.slice(position+1)
    // 后序序列从前开始的左子树长度与中序序列相同
    let postLeft = postOrder.slice(0, position)
    // 后序序列的右子树
    let postRight = postOrder.slice(position, postOrder.length - 1)
    root.left = buildTreeByPostAndIn(postLeft, midLeft)
    root.right = buildTreeByPostAndIn(postRight, midRight)

    return root
}
```

## 路径总和

> 此部分代码在 RouteSum.ts 中

```typescript
/**
 *  计算是否有一条路径上的总和等于目标和
 * @param {TreeNode} root 
 * @param {number} sum 
 * @return {boolean}
 */
function RouteSum (root : TreeNode, sum : number) : boolean {
    const getSum =  (root: TreeNode, sum: number, total: number) : boolean => {
        // 判断是否为叶子结点，若是叶子结点计算当前路径上的和
        if (!root.left && !root.right) {
            total += root.val
            if (total === sum) {
                return true
            } else {
                return false
            }
        } else {
            // 如果只存在左子树
            if (root.left && !root.right) {
                return getSum(root.left, sum, total+root.val)
            } 
            // 如果只存在右子树
            else if (root.right && !root.left) {
                return getSum(root.right, sum, total+root.val)
            } 
            else {
                return (getSum(root.left, sum, total+root.val) || getSum(root.right, sum, total+root.val))
            }
        }
        
    }
    // 如果传入的是空树
    if (!root || root.val === undefined) {
        return false
    }
    return getSum(root, sum, 0);
}
```

## 路径总和附带路径

> 此部分代码在 RouteSum.ts 中

```typescript
/**
 * 给定一个二叉树和一个目标和，找到所有从根结点到叶子结点路径总和等于给定目标和的路径。
 * 
 * @param {TreeNode} root 
 * @param {number} sum 
 * @return {number[][]}
 */
 function RouteSumWithRoute(root: TreeNode, sum: number) : number[][] {
     let result = []
     const getSumRoute = (root: TreeNode, sum: number,total: number, array: number[] = []) => {
         // 判断是否为叶子结点，若是叶子结点计算当前路径上的和
        if (!root.left && !root.right) {
            total += root.val
            
            if (total === sum) {
                array.push(root.val)
                result.push(array)
            }
        } else {
            array.push(root.val)
            // 如果只存在左子树
            if (root.left && !root.right) {
                
                getSumRoute(root.left, sum, total+root.val, [...array])
            } 
            // 如果只存在右子树
            else if (root.right && !root.left) {
                 getSumRoute(root.right, sum, total+root.val, [...array])
            } 
            else {
                 getSumRoute(root.left, sum, total+root.val, [...array])
                 getSumRoute(root.right, sum, total+root.val, [...array])
            }
        }
    }
    // 如果传入的是空树
    if (!root) {
        return []
    }
    getSumRoute(root, sum, 0)
    return result
 }
```

## 二叉树展开为链表

> 此部分代码在 TreeToList.ts中

```typescript
/**
 * 给定一个二叉树，原地将它展开为链表。
 * @param {TreeNode} root 
 */
function TreeToList(root: TreeNode) : void {
    while (root != null) {
        // 如果左子树为 null ，直接考虑右子树
        if (root.left === null) {
            root = root.right
        } else {
            // 寻找左子树最右的结点
            let pre = root.left
            while (pre.right !== null) {
                pre = pre.right
            }
            // 将原来的右子树插入左子树最右边结点的右子树
            pre.right = root.right
            // 将左子树插入到右子树
            root.right = root.left
            root.left = null
            root = root.right
        }
    }
}
```

