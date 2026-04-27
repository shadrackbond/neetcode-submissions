class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // console.log(matrix[0])
        // console.log(matrix[1])
        // console.log(matrix[2])
        //a) compare matrix value vs target
        //b)search through the total elements and not the rows as seen in matrix.length 
        //previously this meant in a 3x3 matrix i was going over three positions 0-2 instead of 9 values
        //c)Go through the ordered datasets instead of the indices 0,1,2
        //d)improve loop condition to left<=right instead of left<right which does not take into account the edge case left==right
        //correctly the matrix should behave as a 1D array, this is a virtual array
        
        // let m = matrix.length //this is for the rows
        // let n = matrix[0].length//colums
        // let totalElements = m * n
        // let left = 0;
        // let right = totalElements
        let m = matrix.length //this is for the rows
        let n = matrix[0].length//colums
        let totalElements = m * n - 1
        let left = 0;
        let right = totalElements
        let mid

        while (left<=right){
            mid = left + Math.floor((right-left)/2)
            let r = Math.floor(mid/n)
            let c = mid % n
            if(matrix[r][c] === target){
                return true
            }
            if(matrix[r][c]>target){
                right = mid - 1
            }
            else  left = mid + 1
            
        }
        return false
    }
}
