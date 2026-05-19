class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let arr = [];
        let sum = 0;
        for(let i = 0; i < operations.length; i++) {
            if(operations[i] === "+") {
                let l1 = arr[arr.length - 1]
                let l2 = arr[arr.length - 2]
                arr.push(l1 + l2)
            }
            else if(operations[i] === "D") {
                if(arr.length === 1) {
                    arr.push(arr[arr.length - 1] * 2)
                } else {
                    let last = arr[arr.length - 1]
                    arr.push(last * 2)
                }
            }
            else if(operations[i] === "C") {
                arr.pop()
            }
            else {
                arr.push(Number(operations[i]))
            }
        }
        for(let j = 0; j < arr.length; j++) {
            sum += arr[j]
        }
        console.log(arr)
        return sum
    }
}
