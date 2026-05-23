class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let sc = [0,0]
        let res = students.length
        for(let i = 0; i < students.length; i++) {
            sc[students[i]]++
        }
        for(let j = 0; j < sandwiches.length; j++) {
            if(sc[sandwiches[j]] > 0) {
                sc[sandwiches[j]]--
                res--;
            } else {
                break;
            }
        }
        return res
    }
}
