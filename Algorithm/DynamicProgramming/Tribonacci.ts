
/**
 * 泰波那契数列 Tn+3 = Tn + Tn+1 + Tn+2
 * @param {number} n 
 * @return {number}
 */
function Tribonacci (n: number): number {
    if (n === 0) {
        return 0
    } else if (n < 3) {
        return 1
    } else {
        let arr = [0, 1, 1]
        let result = 0
        for(let i = 3; i <= n; i++) {
            result = arr[i-3] + arr[i-2] + arr[i-1]
            arr.push(result)
        }
        return arr[n]
    }
}

export default Tribonacci