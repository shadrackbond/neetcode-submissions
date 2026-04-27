class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let GreatestProfit = 0

        for(let i = 0; i<prices.length; i++){
            for(let s= i+1; s<prices.length; s++){
                let profit = prices[s] - prices[i];

                if(profit>GreatestProfit){
                    GreatestProfit = profit;
                }
            }
        }
        return GreatestProfit;

    }
}
