class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) {
            return 0
        }
        let sorted = nums.sort((a, b) => a - b)
        console.log(sorted)
        let count = 1;
        let highest = 0;
        for(let i = 0; i < sorted.length; i++) {
            if(sorted[i] + 1 === sorted[i + 1]) {
                count += 1
            }
            if(sorted[i] === sorted[i + 1]) {
                continue
            }
            if(sorted[i] + 1 !== sorted[i + 1]) {
                highest = highest > count ? highest : count
                count = 1
            }
        }
        return highest
    }
}
