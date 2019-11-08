/**
 * 给定一个包含 n 个整数的数组 arr 和一个目标值 target，
 * 判断 arr 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * @param {number[]} arr 
 * @param {number} target 
 */
function SumFourNumbers(arr: number[], target: number): number[][] {
        // 存储结果
        const result = []
        if (arr.length < 4) {
            return result
        }
        // 排序，便于去重
        arr.sort((a,b) => a-b)
        for(let i = 0; i < arr.length - 3; i++) {
            // 跳过重复
            if (i > 0 && arr[i] === arr[i - 1]) {
                continue
            }
            // 如果当前连续四个已经超过目标值 则后面已无符合条件的子序列，直接退出循环
            if (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] > target) {
                break
            }
            // 下部分类似于三数之和
            for(let j = i + 1; j < arr.length - 2; j++) {
                // 去除重复情况
                if (j > i + 1 && arr[j] === arr[j - 1]) {
                    continue
                }
                let left = j + 1
                let right = arr.length - 1
                while (left < right) {
                    let sum = arr[i] + arr[j] + arr[left] + arr[right]
                    if (sum === target) {
                        result.push([arr[i], arr[j], arr[left], arr[right]])
                    } 
                    if (sum <= target) {
                        while (arr[left] === arr[++left]);
                    } else {
                        while (arr[right] === arr[--right]);
                    }
                }
            }
        }
        return result
}

export {SumFourNumbers}