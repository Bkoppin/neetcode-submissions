class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let maps = {};
        for(let i = 0; i < nums.length; i++) {
            if(!maps[nums[i]]) {
                maps[nums[i]] = 1
            } else {
                maps[nums[i]]++
            }
        }
        const highestTwo = Object.entries(maps).sort((a, b) => b[1] - a[1]).slice(0, k).map(entry => entry[0]);
        return highestTwo
    }
}
