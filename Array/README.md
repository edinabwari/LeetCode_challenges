## Arrays
In this repo, we take arrays head-on, forming a strong foundation for tackling a wide array of programming challenges😄. From finding the Two Sum or the Best Time to Buy and Sell Stock to more complex tasks like solving the 3 Sum problem or uncovering the Minimum in a Rotated Sorted Array, we're here to sharpen our problem-solving skills and unlock the full potential of arrays. So, whether you're a seasoned coder looking to refine your array expertise or a newcomer eager to learn, this will be fun.

---
### 1. `twoSums`
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

> Input: nums = [2,7,11,15], target = 9
>
> Output: [0,1]
>
> Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

> Input: nums = [3,2,4], target = 6
>
> Output: [1,2]

Example 3:

> Input: nums = [3,3], target = 6
>
> Output: [0,1]
 

Constraints:

> 2 <= nums.length <= 104
>
> -109 <= nums[i] <= 109
>
> -109 <= target <= 109

---

### 2. `Best Time to Buy and Sell Stock`

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

 

Example 1:

> Input: prices = [7,1,5,3,6,4]
>
>Output: 5
>
>Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), 
>
>profit = 6-1 = 5.

Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

> Input: prices = [7,6,4,3,1]
>
> Output: 0
>
> Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

> 1 <= prices.length <= 105
>
> 0 <= prices[i] <= 104

---
### `Contains Duplicate`

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.


Example 1:

> Input: nums = [1,2,3,1]
>
> Output: true

Example 2:

> Input: nums = [1,2,3,4]
>
> Output: false

Example 3:

> Input: nums = [1,1,1,3,3,4,3,2,4,2]
>
> Output: true

Constraints:

> 1 <= nums.length <= 105
>
> -109 <= nums[i] <= 109

