class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length <= 1) {
            return false
        }
        let stack = []
        for(let i = 0; i < s.length; i++) {
            if(['{','[', '('].includes(s[i])) {
                stack.push(s[i])
            } else {
                let ending = stack[stack.length - 1]
                stack.push(s[i])
                if((ending === '{' && s[i] === '}') ||
                (ending === '[' && s[i] === ']') ||
                (ending === '(' && s[i] === ')')) {
                    stack.pop()
                    stack.pop()
                }
            }
        }
        if(stack.length > 0) {
            return false
        }
        return true
        }
    }