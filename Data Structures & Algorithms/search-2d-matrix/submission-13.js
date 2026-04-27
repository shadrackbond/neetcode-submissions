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
        //split and join into one
        //binary search 
        //bring back to 2d
        // for(let i = 0; i<matrix.length;i++){
        //     let newform = matrix[i]
        //     for(let j=0; j<newform.length;j++){
        //         console.log(newform[j])
        //         if(newform[j]===target){
        //             return true
        //         }
        //     }
        // }
        // return false

        //n =matrix.length
        //m =matrix[0].length
        //one = m*n

        let m = matrix.length;
        let n = matrix[0].length
        let totalElements = m*n - 1
        let left = 0
        let right = totalElements
        let mid

        while(left<=right){
            mid = left + Math.floor((right-left)/2)
            let r = Math.floor(mid/n)
            let c = mid %n
            if(matrix[r][c]===target){
                return true
            }
            if(matrix[r][c] > target){
                right = mid - 1
            }
            else
            left = mid + 1
        }
        return false

    }
}
