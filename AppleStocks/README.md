# Writing coding interview questions hasn't made me rich. Maybe trading Apple stocks will.
Suppose we could access yesterday's stock prices as an array, where:

* The indices are the time in minutes past trade opening time, which was 9:30am local time.
* The values are the price in dollars of Apple stock at that time.

So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and returns **the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.**

For example:

```Java
int[] stockPricesYesterday = new int[]{10, 7, 5, 8, 11, 9};

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)
```
No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
###Tips
* It is not sufficient to simply take the difference between the highest price and the lowest price, because the highest price may come before the lowest price. You must buy before you sell.

* What if the stock value goes down all day? In that case, the best profit will be negative.

* You can do this in _O(n)_ time and _O(1)_ space!
