class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length <= 1) {
            return 0
        }
        let p1 = 0;
        let highest = 0;
        while(p1 < prices.length) {
            for(let i = p1 + 1; i < prices.length; i++) {
                if(prices[i] - prices[p1] > highest) {
                    highest = prices[i] - prices[p1]
                }
            }
            p1++
        }
        return highest
    }
}
