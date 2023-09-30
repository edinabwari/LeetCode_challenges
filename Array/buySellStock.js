// given an array of prices
// maximazie to profit on selecting a specific day to buy and sell 
// return maximum profit
// you must sell before you buy

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min_price = prices[0];
    let max_Profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min_price) {
            min_price = prices[i];
        } else if (prices[i] - min_price > maxProfit) {
            max_Profit = prices[i] - min_price;
        }
    }
    return max_Profit;
};
const prices = [7,1,5,3,6,4];
const maxiProfit = maxProfit(prices)

console.log(maxiProfit);