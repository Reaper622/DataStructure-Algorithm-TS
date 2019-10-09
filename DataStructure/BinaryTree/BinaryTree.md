# 二叉树

> 二叉树是一种典型的树状结构，二叉树是每个节点最多有两个子树的树结构，通常被称为“左子树”与“右子树”。

### 二叉树的数据结构

首先我们定义二叉树节点的数据结构

> 以下相关代码在 BinaryTree.ts 中

```typescript
class TreeNode {
    val: any //节点内容
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
        // 临时存储所有节点，方便寻找父子节点
        let nodeList : TreeNode[] = []
        // 顶节点
        let root : TreeNode
        for(let i = 0, len = data.length; i < len; i++) {
            let node = new TreeNode(data[i]);
            nodeList.push(node);
            
            if (i > 0) {
                // 计算节点所在层级
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
    

}
```

### 二叉树的中序遍历	

遍历顺序 左子树 >> 节点 >> 右子树

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

### 二叉树的先序遍历 

遍历顺序 节点 >> 左子树 >> 右子树

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

 ###  二叉树的后序遍历 

遍历顺序 左子树 >> 右子树 >> 节点

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

### 判断是否为对称二叉树

> 此部分代码在 Symmetry.ts

对称二叉树的要求:

- 两个根结点相等
- 左子树的右节点和右子树的左节点相同。
- 右子树的左节点和左子树的右节点相同。

```typescript
import Tree, {TreeNode} from './BinaryTree'

/**
 * 判断是否为对称二叉树
 * 对称二叉树条件为：
 * - 两个根节点相等
 * - 左子树的右节点和右子树的左节点相同
 * - 右子树的左节点和左子树的右节点相同
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
    // 如果两个根节点都不存在
    if (!node1 && !node2) {
        return true;
    } 
    // 如果只有一个根节点不存在
    else if (!node1 || !node2) {
        return false;
    }
    // 如果根节点值不相同
    else if (node1.val !== node2.val) {
        return false;
    }

    //向下递归调用
    return isSymmetryTree(node1.left, node2.right) && isSymmetryTree(node1.right, node2.left);
}

export default isSymmetry
```

### 二叉树的镜像

镜像即二叉树所有的的左右节点交换位置

```typescript
import {TreeNode} from './BinaryTree'

/**
 * 使一个二叉树变化为他的镜像
 * 即交换左右节点位置
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

