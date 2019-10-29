"use strict";
exports.__esModule = true;
/**
 * 买卖股票的最佳时机 只能买一次
 * @param {number[]} prices
 * @return {number}
 */
function maxProfitOnce(prices) {
    // 价格最低点
    var minPrice = Infinity;
    // 可获得的最高利润
    var maxProfit = 0;
    for (var i = 0; i < prices.length; i++) {
        // 如果价格更低 将此时价格更改为最低价格
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
}
exports.maxProfitOnce = maxProfitOnce;
/**
 * 买卖股票的最佳时机II 可以买多次
 * @param {number[]} prices
 * @return {number}
 */
function maxProfitMore(prices) {
    // 存储总利润
    var profit = 0;
    // 赚取每一次 == 赚得最多
    for (var i = 0; i < prices.length - 1; i++) {
        // 只要后面的价格比前面高，就完成一次交易
        if (prices[i + 1] - prices[i] > 0) {
            profit += prices[i + 1] - prices[i];
        }
    }
    return profit;
}
exports.maxProfitMore = maxProfitMore;
