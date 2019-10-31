
/**
 * 计算并返回 x 的平方根（整数)，其中 x 是非负整数。
 * @param {number} x 
 * @return {number}
 */
function Sqrt(x: number): number {
  // 考虑到特殊情况 0 把左边界定义到0
  let left = 0
  let right = Math.ceil(x/2)
  while(left < right) {
    // 取右中位数 防止进入死循环
    let mid = Math.ceil(left + (right - left)/2)
    let num = mid*mid
    if (num > x) {
      right = mid - 1
    } else {
      left = mid
    }
  }
  // 停止循环时 left 即为平方根的整数部分
  return left
}

export {Sqrt}