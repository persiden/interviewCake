var stock_prices_yesterday = [10, 7, 5, 4, 3, 2, 1];

function get_max_profit(stock_prices_yesterday){
	var maxProfit = -Number.MAX_VALUE;
	var minVal = Number.MAX_VALUE;
	for (i = 0; i < stock_prices_yesterday.length;i++){
		if (i === 0){
			minVal = stock_prices_yesterday[i]
		}else{
			maxProfit = Math.max(maxProfit,(stock_prices_yesterday[i]-minVal));
			minVal = Math.min(minVal,stock_prices_yesterday[i]);
		}
	}
	return maxProfit
} 
console.log(get_max_profit(stock_prices_yesterday));
