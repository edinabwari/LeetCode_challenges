#given an array prices where prices[i] is the price of a given stock on the ith day.
#maximize your profit by choosing a single day to buy one stock 
#and choosing a different day in the future to sell that stock.
#Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

prices = [20, 9, 11, 40, 71]
min_price = prices[0]
min_price_index = 0

for index,price in enumerate(prices):
    if price < min_price:
        min_price = price
        min_price_index = index

print("The buying price is ", min_price)

#check if our smallest price is on the last index of the list
if min_price_index < len(prices) - 1:
      max_price =max(prices[min_price_index + 1:])
      if max_price > min_price:
          max_profit = max_price - min_price
          print(f"Buy the stock at {min_price} on day {min_price_index + 1 } and sell it at {max_price} with {max_profit} as profit")
      else:
          print(0)
else:
    print(0)
   
