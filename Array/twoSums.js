/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hashTable = {}; // created a hashTable to store the elements of the array
    for (let i = 0; i < nums.length; i++) {
        hashTable[nums[i]] = i; // function to store the elements of the arry in the hashtable
    }

    // itarate over the array and check if compliment of each element is in the hashTable
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in hashTable && hashTable[complement] !== i) {
            return [i, hashTable[complement]];
        }
    }
    return [] // if no solution return empty array
};

const nums = [2, 7, 11, 15];
const target = 17;

const result = twoSum(nums, target);

if (result !== null) {
    console.log(`The numbers that add up to ${target} are ${nums[result[0]]} and ${nums[result[1]]}`)
} else {
    console.log('No such pair')
}
