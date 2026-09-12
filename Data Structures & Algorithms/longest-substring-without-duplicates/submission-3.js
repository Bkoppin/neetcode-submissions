class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charIndex = new Map();
        let left = 0;
        let maxLen = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            if (charIndex.has(char) && charIndex.get(char) >= left) {
                left = charIndex.get(char) + 1;
            }
            charIndex.set(char, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen
    }
}
