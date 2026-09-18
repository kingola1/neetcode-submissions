class Solution {

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            // 1. while l < r AND s[l] is NOT alphanumeric -> l++
            while (l < r && !this.isAlphaNum(s[l])) l++;
            // 2. while l < r AND s[r] is NOT alphanumeric -> r--
            while (l < r && !this.isAlphaNum(s[r])) r--;
            // 3. compare s[l] and s[r], lowercased. If different -> return false
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

            l++;
            r--;
        }

        return true;
    }

    isAlphaNum(ch) {
        return /[a-z0-9]/i.test(ch);
    }
}
