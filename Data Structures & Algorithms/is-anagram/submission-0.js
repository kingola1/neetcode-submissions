class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        const counts = new Map();

        for(const ch of t){
            counts.set(ch, (counts.get(ch) || 0) + 1);
        }

        for(const ch of s){
            if (!counts.has(ch) || counts.get(ch) === 0) return false;
            counts.set(ch, counts.get(ch) - 1);
        }

        return true;
    }
}
