class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    
        for (let i = 0; i<nums.length;i++){
            for (let j = i+1; j<nums.length;j++){
                let totalSum = nums[i] + nums[j]
                if(totalSum == target){
                    return[i,j]
                }
            }
        }
    }
}
