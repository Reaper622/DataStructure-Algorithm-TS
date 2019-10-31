
/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * @param {number[]} array 
 * @param {number} target 
 */
function GetIndexFromRotateArray(array: number[], target: number): number {
  let left = 0
  let right = array.length - 1
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2)
    // 当 left - mid 为有序时，且target不在此有序部分时，向后寻找
    if (array[0] <= array[mid] && (target > array[mid] || target < array[0])) {
      left = mid + 1
    // 当 left - mid 不有序时， 且target不在此部分时，向后寻找
    } else if (target > array[mid] && target < array[0] ) {
      left = mid + 1
    // 其他情况均向前寻找
    } else {
      right = mid
    }
  }
  return left === right && array[left] === target ? left : -1
}

export {GetIndexFromRotateArray}