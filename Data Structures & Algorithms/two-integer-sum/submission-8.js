class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {}
        let answer = []
        for(let i = 0; i < nums.length; i++) {
            let temp = target - nums[i]
            if(hash[temp] !== undefined) {
                answer.push(i, hash[temp])
                break
            }
            if(!hash[nums[i]]) {
                hash[nums[i]] = i
            }
        }
        return answer
    }
}
