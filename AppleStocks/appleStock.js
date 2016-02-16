var stock_prices_yesterday = [10, 7, 5, 4, 3, 2, 1];
							//change to any value works will all numbers

function get_max_profit(stock_prices_yesterday){
	var maxProfit = -Number.MAX_VALUE;
	var minVal  = Number.MAX_VALUE;
	var maxVal = -Number.MAX_VALUE;
	var curVal  = 0;
	for (i = 0; i < stock_prices_yesterday.length;i++){
		curVal = stock_prices_yesterday[i];
		if (i === 0){
			minVal = stock_prices_yesterday[i]
		}else{
			maxProfit = Math.max(maxProfit,(curVal-minVal));
			minVal = Math.min(minVal,curVal);
		}
	}
	return maxProfit
} 
console.log(get_max_profit(stock_prices_yesterday));