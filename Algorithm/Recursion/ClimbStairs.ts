
/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶，求有多少种方法到达楼顶
 * 递归实现爬楼梯问题
 * @param {number} n 
 * @return {number}
 */
function ClimbStairs (n: number): number {
    if (n <= 2) {
        return n
    } else {
        return ClimbStairs(n-1) + ClimbStairs(n-2)
    }
}


/**
 * 使用记忆化存储避免重复计算
 * @param {number} n
 * @param {number[]} memory
 * @return {number}
 */
function ClimbStairsWithMemory(n: number, memory: number[]) :number {
    if (!memory) {
        memory = []
    }
    if (n <= 2) {
        return n
    }
    if (!memory[n]) {
        memory[n] = ClimbStairsWithMemory(n-1, memory) + ClimbStairsWithMemory(n-2, memory)
    }
    return memory[n]
}

export {ClimbStairs, ClimbStairsWithMemory}