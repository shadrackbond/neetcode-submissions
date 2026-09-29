class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //brute force
        const results = [];
        const seen = new Set();

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        const triplet = [nums[i], nums[j], nums[k]]
                            .sort((a, b) => a - b);

                        const key = triplet.join(",");

                    if (!seen.has(key)) {
                        seen.add(key);
                        results.push(triplet);
                    }
                }
            }
        }
    }

    return results;
    }
}
