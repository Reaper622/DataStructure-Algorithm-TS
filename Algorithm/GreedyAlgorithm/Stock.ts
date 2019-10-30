/**
 * 买卖股票的最佳时机 只能买一次
 * @param {number[]} prices 
 * @return {number}
 */
function maxProfitOnce (prices: number[]): number {
    // 价格最低点
    let minPrice = Infinity
    // 可获得的最高利润
    let maxProfit = 0
    for(let i = 0; i < prices.length; i++) {
        // 如果价格更低 将此时价格更改为最低价格
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit
}

/**
 * 买卖股票的最佳时机II 可以买多次
 * @param {number[]} prices 
 * @return {number}
 */
function maxProfitMore (prices: number[]): number {
    // 存储总利润
    let profit = 0
    // 赚取每一次 == 赚得最多
    for(let i = 0; i < prices.length - 1; i++) {
        // 只要后面的价格比前面高，就完成一次交易
        if (prices[i+1] - prices[i] > 0) {
            profit += prices[i+1] - prices[i]
        }
    }

    return profit
}

/**
 * 买卖股票的最佳时机 含手续费
 * @param {number[]} prices 
 * @param {number} fee 
 */
function maxProfitWithFee (prices: number[], fee: number): number {
    // 定义变量存储当我们不持有股票的最大利润
    let cash = 0
    // 定义变量存储当我们持有股票时最大利润
    let hold = -prices[0]
    for(let i = 1; i < prices.length; i++) {
        // 当天可选择不进行交易或者卖出手头持有股票变现
        cash = Math.max(cash, hold + prices[i] - fee)
        // 当天可选择不急行交易或者购入股票
        hold = Math.max(hold, cash - prices[i])
    }
    return cash
}

export {maxProfitOnce, maxProfitMore, maxProfitWithFee}