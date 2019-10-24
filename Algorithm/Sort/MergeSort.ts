
/**
 * 归并排序，将数组分割成前后两个数组，之后递归分割直到数组长度小于2，进行归并
 * @param {number[]} array 
 * @return {number[]}
 */
function MergeSort(array: number[]): number[] {
    if (array.length < 2) {
        return array
    }
    // 获取中点
    const mid = Math.floor(array.length / 2)
    // 前半段和后半段
    let front = array.slice(0, mid)
    let end = array.slice(mid)
    return merge(MergeSort(front), MergeSort(end))
}

/**
 * 归并操作
 * @param {number[]} front 
 * @param {number[]} end 
 */
function merge(front: number[], end: number[]): number[] {
    // 创建一个临时存储数组
    const temp = []
    while(front.length && end.length) {
        // 比较两数组第一个元素,将较小的元素加入临时数组
        if (front[0] < end[0]) {
            temp.push(front.shift())
        } else {
            temp.push(end.shift())
        }
    }
    // 若左右数组有一个为空，那么此时另一个数组一定大于temp中的所有元素，直接将所哟元素加入temp
    while(front.length) {
        temp.push(front.shift())
    }
    while(end.length) {
        temp.push(end.shift())
    }

    return temp
}

export default MergeSort