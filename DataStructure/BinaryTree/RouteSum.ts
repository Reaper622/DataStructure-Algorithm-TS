import Tree, { TreeNode } from './BinaryTree'

/**
 *  计算是否有一条路径上的总和等于目标和
 * @param {TreeNode} root 
 * @param {number} sum 
 * @return {boolean}
 */
function RouteSum (root : TreeNode, sum : number) : boolean {
    const getSum =  (root: TreeNode, sum: number, total: number) : boolean => {
        // 判断是否为叶子节点，若是叶子节点计算当前路径上的和
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

/**
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 * 
 * @param {TreeNode} root 
 * @param {number} sum 
 * @return {number[][]}
 */
 function RouteSumWithRoute(root: TreeNode, sum: number) : number[][] {
     let result = []
     const getSumRoute = (root: TreeNode, sum: number,total: number, array: number[] = []) => {
         // 判断是否为叶子节点，若是叶子节点计算当前路径上的和
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

export {RouteSum, RouteSumWithRoute } 

