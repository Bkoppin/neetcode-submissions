class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, "")
        let joined = s.split(" ").join("").toLowerCase()
        let p1 = 0
        let p2 = joined.length - 1
        while(p1 < p2) {
            console.log(joined[p1], joined[p2])
            if(joined[p1] !== joined[p2]) {
                return false
            }
            p1++
            p2--
        }
        return true
    }
}
