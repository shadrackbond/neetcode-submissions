class Solution {
    isPalindrome(s) {
        let newStr = "";

        for (let c of s) {
            if (/[a-zA-Z0-9]/.test(c)) {
                newStr += c.toLowerCase();
            }
        }

        return newStr === newStr.split("").reverse().join("");
    }
}