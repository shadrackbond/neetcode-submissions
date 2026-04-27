class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let newArray = matrix.flat()
        console.log(newArray)
        for (let i = 0; i<newArray.length; i++){
            if(newArray[i]===target){
                return true
            }
        }
        return false
    }
}
