class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let max_left = 0;
        let max_right = 0;
        let total_water = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                // First, check if the current bar is a NEW max_left wall
                if (height[left] >= max_left) {
                    // If it is, update the wall. No water can be trapped here.
                    max_left = height[left];
                } else {
                    total_water += max_left - height[left];
                }
                left++;

            } else {
                if (height[right] >= max_right) {
                    // If it is, update the wall.
                    max_right = height[right];
                } else {
                    // If it's shorter than max_right, we can trap water.
                    total_water += max_right - height[right];
                }
                right--;
            }
        }
        
        return total_water;
    }
}