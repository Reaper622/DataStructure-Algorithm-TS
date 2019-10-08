# 二叉树

> 二叉树是一种典型的树状结构，二叉树是每个节点最多有两个子树的树结构，通常被称为“左子树”与“右子树”。

首先我们定义二叉树节点的数据结构

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

二叉树的中序遍历	遍历顺序 左子树 >> 节点 >> 右子树

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

二叉树的先序遍历 遍历顺序 节点 >> 左子树 >> 右子树

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

 二叉树的后序遍历 遍历顺序 左子树 >> 右子树 >> 节点

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

