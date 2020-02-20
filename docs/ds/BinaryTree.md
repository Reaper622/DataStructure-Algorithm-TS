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

## 二叉树的中序遍历(非递归写法)

```typescript
// 中序遍历非递归实现
    public inOrderTraversal2 (root: TreeNode) : T[] {
        let arr: T[] = [];
        let stack: TreeNode[] = [];
        let node = root;
        while(node || stack.length > 0) {
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

## 二叉树的先序遍历(非递归写法)

```typescript
// 先序遍历非递归实现
    public preOrderTraversal2 (root: TreeNode): T[] {
        let arr: T[] = [];
        let stack: TreeNode[] = [];
        // 栈内存放root根节点
        stack.push(root);
        while(stack.length > 0) {
            let node = stack.pop();
            // 首先传入根节点的值
            arr.push(node.val);
            // 向栈内推送 右子树和左子树 使左子树在右子树上
            if (node.right !== undefined) stack.push(node.right);
            if (node.left !== undefined) stack.push(node.left);
        }
        return arr;
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

## 二叉树的后序遍历(非递归写法)

```typescript
// 后续遍历非递归实现
    public postOrderTraversal2 (root: TreeNode): T[] {
        let arr: T[] = [];
        let stack: TreeNode[] = [];
        let node = root;
        let right = null;
        while (node || stack.length > 0) {
            if (node) {
                // 首先推入根节点
                stack.push(node);
                // 优先遍历左子树
                node = node.left;
            } else {
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
        // 使用 queue 来存储当前层级的节点
        let result = [], queue = [root]
        while (queue.length) {
            let levelSize = queue.length
            let currentLevel = []
            while (levelSize--) {
                let node = queue.shift()
                currentLevel.push(node.val)
                // 在当前层级推入一个结点时，把它的左右子结点推入队列中
                if (node.left && node.left.val !== null) queue.push(node.left)
                if (node.right && node.right.val !== null) queue.push(node.right)
            }
            result.push(currentLevel)
        }
        return result
    }
```

## 二叉树锯齿遍历

> 此部分代码在 ZigzagLevelOrder.ts 中

给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

通过添加一个偶数列的标志，在偶数列翻转队列即可。

```typescript
/**
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。
 *（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder (root: TreeNode): number[][] | number[] {
    if (!root) return []
    // 使用 queue 来存储当前层级的节点
    let result = [], queue = [root];
    // 是否是偶数列的标志
    let even = false;
    while (queue.length) {
        let levelSize = queue.length
        let currentLevel = []
        while (levelSize--) {
            let node = queue.shift()
            currentLevel.push(node.val)
            // 在当前层级推入一个结点时，把它的左右子结点推入队列中
            if (node.left && node.left.val !== null) queue.push(node.left)
            if (node.right && node.right.val !== null) queue.push(node.right)
        }
        if (even) {
            result.push(currentLevel.reverse());
        } else {
            result.push(currentLevel);
        }
        // 转换奇偶数列状态
        even = !even;
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

输入一棵二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。

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

## 判断一个二叉树是否为另一个二叉树的子结构

> 此部分代码在 HasSubTree.ts中

给定两个非空二叉树 tree1 和 tree2，检验 tree1 中是否包含和 tree2 具有相同结构和节点值的子树。tree1 的一个子树包括 tree2 的一个节点和这个节点的所有子孙。tree1 也可以看做它自身的一棵子树。

```typescript
/**
 * 输入两个二叉树，判断tree2是否为tree1的子结构。
 * @param {TreeNode} tree1 
 * @param {TreeNode} tree2 
 * @return {boolean}
 */
function HasSubTree(tree1: TreeNode, tree2: TreeNode): boolean {
    if (tree1 === null && tree2 === null) return true
    if (tree1 === null || tree2 === null) return false
    if (tree1 !== null && tree2 !== null) {
        // 如果找到节点与tree2根节点相等
        if (tree1.val === tree2.val) {
            return HasSubTreeHelper(tree1, tree2) || HasSubTree(tree1.left, tree2) || HasSubTree(tree1.right, tree2)
        }
    }

    return HasSubTree(tree1.left, tree2) || HasSubTree(tree1.right, tree2)
}

/**
 * 找到相同的根结点后 开始遍历查看两个树结构是否相同。
 * @param {TreeNode} tree1 
 * @param {TreeNode} tree2 
 * @return {boolean}
 */
function HasSubTreeHelper(tree1: TreeNode, tree2: TreeNode): boolean {
    // 均为空则相等
    if (!tree1 && !tree2)
        return true
    // 一空一不空则不想等
    if (!tree1 || !tree2)
        return false
    // 值相等 则递归判断
    if (tree1.val === tree2.val) {
        return HasSubTreeHelper(tree1.left, tree2.left) && HasSubTreeHelper(tree1.right, tree2.right)
    }

    return false
}
```

## 二叉搜索树的后序遍历序列

> 此部分代码在 VerifySquenceOfBTS.ts 中

输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

```typescript
/**
 * 判断输入序列是否为一颗二叉搜索树的后序遍历序列。
 * @param {number} sequence 
 * @return {boolean}
 */
function verifySquenceOfBTS(sequence: number[]): boolean {
    // 判断是否为空
    if (!sequence) {
        return false;
    }
    let len = sequence.length;
    // 获取根结点，由于是后序遍历序列，最后一个节点即为根结点
    let root = sequence[len - 1];
    // 在二叉搜索树中，左子树的结点都小于根结点
    let l = 0;
    for(; l < len - 1; l++) {
        // 如果有比根结点大的则停止
        if (sequence[l] > root) {
            break;
        }
    }
    // 在二叉搜索树中，右子树的结点都大于根结点
    let r = l;
    for(; r < len - 1; r++) {
        // 如果右子树中有比根结点小的 则证明这不是一个二叉搜索树的后序遍历序列
        if (sequence[r] < root) {
            return false;
        }
    }
    let left = true, right = true;
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
```



