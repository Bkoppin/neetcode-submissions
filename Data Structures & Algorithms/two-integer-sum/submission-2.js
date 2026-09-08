class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let p1 = 0;
        let p2 = 1;
        let answer = [];
        while (p1 < nums.length - 1) {
            if (nums[p1] + nums[p2] === target) {
                answer.push(p1, p2);
                break
            } else {
                p2++
            }
            if(p2 > nums.length - 1) {
                p1++
                p2 = p1 + 1
            }
        }
        return answer
    }
}
