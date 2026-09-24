class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // for(let i = 0; i<numbers.length;i++){
        //     for(let x = i+1; x<numbers.length;x++){
        //         if(numbers[i] + numbers[x] === target){
        //             return [i+1,x+1]
        //         }
        //     }

        // }
        let left = 0;
        let right = numbers.length -1;

        while(left<right){
            const sum = numbers[left] + numbers[right];

            if(sum === target){
                return [left+1, right+1];
            }
            if(sum<target){
                left ++;
            }else(
                right--
            )
        }
    }
}
