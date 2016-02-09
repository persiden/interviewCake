var stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

function get_max_profit(stock_prices_yesterday){
	var maxProfit = Number.MIN_VALUE;
	var minVal  = Number.MIN_VALUE;
	var curVal  = Number.MIN_VALUE;
	for (var i = 0; i < stock_prices_yesterday.length;i++){
		curVal = stock_prices_yesterday[i];
		if (i = 0){minVal = stock_prices_yesterday[i]}else{
			maxProfit = Math.max(curVal,minVal);
			minVal = Math.min(minVal,curVal);
		}
	}
	return maxProfit
	//returns 6 (buying for $5 and selling for $11)
} 

console.log("" + get_max_profit(stock_prices_yesterday));
