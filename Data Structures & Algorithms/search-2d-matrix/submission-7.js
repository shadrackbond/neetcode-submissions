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

        for(let i = 0; i<matrix.length;i++){
           let  newform = matrix[i]
            for(let j=0;j<newform.length;j++){
                console.log(newform[j])
                if(newform[j]===target){
                    return true
                }
            }
        }
        return false
    }
}
