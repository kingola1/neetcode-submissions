class Solution {

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let word = ""

        for(let char of s){
            if(/[a-z0-9]/i.test(char)){
                word += char.toLowerCase();
            }
        }

        return word === word.split("").reverse().join("")
    }
}
