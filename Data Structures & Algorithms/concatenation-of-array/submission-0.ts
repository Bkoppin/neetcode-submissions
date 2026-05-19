class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let result: number[] = nums
        result.push(...nums)
        return result
    }
}
