class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = {}
        if( s.length !== t.length) {
            return false
        }
        for(let char of s) {
            if(!map[char]) {
                map[char] = 1
            } else {
                map[char] += 1
            }
        }
        for(let char of t) {
            if(map[char] === 0 || !map[char]) {
                return false
            } else {
                map[char] -= 1
            }
        }
        return true
    }
}
