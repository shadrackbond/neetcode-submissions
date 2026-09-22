class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i = 0; i<numbers.length;i++){
            for(let x = i+1; x<numbers.length;x++){
                if(numbers[i] + numbers[x] === target){
                    return [i+1,x+1]
                }
            }

        }
        return[];
    }
}
