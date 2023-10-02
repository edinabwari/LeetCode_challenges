// given an array of prices input
// maximazie to profit on selecting a specific day to buy and sell 
// return maximum profit
// you must sell before you buy

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min_price = prices[0];
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        // Update the minimum price if we find a lower price
        min_price = Math.min(min_price, prices[i]);
        // Update the maximum profit if selling at the current price gives a higher profit
        maxProfit = Math.max(maxProfit, prices[i] - min_price);
    }
    return maxProfit;
};
const prices = [7,6,5,4,2,3];
const maxiProfit = maxProfit(prices)

console.log(maxiProfit);