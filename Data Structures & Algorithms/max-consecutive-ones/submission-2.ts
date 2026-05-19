class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count = 0;
        let longest = 0;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 1) {
                count++
                longest = count > longest ? count : longest
            } else {
                count = 0
            }
        }
        return longest
    }
}
