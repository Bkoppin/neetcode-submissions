class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let p1 = 0;
        let p2 = numbers.length - 1;
        let answer = []
        while(p1 < numbers.length) {
            if(numbers[p1] + numbers[p2] === target) {
                answer.push(p1 +1, p2 + 1)
                break
            }
            if(numbers[p1] + numbers[p2] > target) {
                p2--
            } else {
                p1++
            }
        }
        return answer
    }
}
