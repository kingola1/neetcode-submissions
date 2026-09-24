class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minSoFar = prices[0];
        let best = 0;

        for (let i = 1; i < prices.length; i++) {
            const profit = prices[i] - minSoFar;
            best = Math.max(best, profit);
            minSoFar = Math.min(minSoFar, prices[i]);
        }

        return best;
    }
}
