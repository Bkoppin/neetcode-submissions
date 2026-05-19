class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let largest = 0;
        for(let i = 0; i < arr.length; i++) {
            largest = 0
            for(let j = i + 1; j < arr.length; j++) {
                console.log(largest, j)
                if(largest < arr[j]) {
                    largest = arr[j]
                }
            }
            arr[i] = largest
        }
        arr[arr.length-1] = -1
        return arr
    }
}
