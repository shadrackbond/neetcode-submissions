class Solution {
    isPalindrome(s) {
        // let newStr = ""; // so after removing extra spaces and characters

        // for (let c of s) {
        //     if (/[a-zA-Z0-9]/.test(c)) {
        //         newStr += c.toLowerCase();
        //     }
        // }

        // return newStr === newStr.split("").reverse().join("");

        //two pointers 
        // have two pointers one at the beginning of the string and the second one at the end of the string
        //left = 0;
        //right = s.length -1
        // space compare character == false 
        // when left encounters a space, special character l++
        //when rigth encounters a space, special character r--
        //turn all character to lower case
        //return true

        /*
        A --> Z or
        a --> z or
        0 --> 9 
        */

        let l = 0;
        let r = s.length -1;

        while(l<r){
            while(l < r && !this.alphaNumeric(s[l])){
                l++;
            }
            while(l < r && !this.alphaNumeric(s[r])){
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()){
                return false
            }
            l++;
            r--;
        }

        return true;



    }

    alphaNumeric(c) {
        return(
            ('A' <= c && c <= 'Z')||
            ('a' <= c && c <= 'z')||
            ('0' <= c && c <= '9')
        )
    }
}