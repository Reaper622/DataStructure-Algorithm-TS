# 贪心算法

> 对问题求解时，总是做出当前最好的做法。「即不实在整体的情况下考虑，而是做局部最优解」

`贪心算法`和`动态规划`的不同之处在于：`贪心算法`对于它的每个子问题的解决方案都会做出选择，不能回退，`动态规划`则会保存之前的元素案结果，根据当前结果堆当前进行选择，存在回退功能。

适用场景：

- 所求问题能够分解为子问题。
- 子问题的最优解能够递归得到最终问题的最优解。

## 买卖股票的最佳时机

> 此部分代码在 Stock.ts 中

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

我们可以首先内部存储两个变量，分别是`购入的最低价格`和`最大利润`

即`购入的最低价格`后面的最大利润肯定为减去当前最低价格的差，我们只需遍历后依次和`最大利润`进行比较，获取最后的最大利润即为整体能得到的最大利润。

```typescript
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
```

## 买卖股票的最佳时机 II

> 此部分代码在 stock.ts 中

大体与上题相似，只是这次不限制购买次数，为了获取最大利益，可以尽可能地完成更多的交易。可以尽可能完成更多的交易。

但要注意，在再次购买前一定要出售掉之前的股票。

这次我们能赚一笔是一笔，只要后面价格比前面高，就完成一次交易，赚取每一笔 === 赚得最多

```typescript
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
```

## 买卖股票的最佳时机（含手续费）

> 此部分代码在 stock.ts 中

大体还是如同第一题，但是此次增加了非负整数`fee`作为交易股票的手续费用。此时我们依旧可以无限次地进行交易，但一次交易就要付手续费。

这次我们借助一部分动态规划的思想，我们保存两个变量`cash`和`hold`来分别表示不持有股票时的最大利润和持有股票时的最大利润，最后完成最后一笔交易后我们返回不持有股票时的最大利润即可。

```typescript
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
```

