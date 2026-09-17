class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);      // dedupes for free
        let best = 0;

        for (const num of numSet) {
            // 1. if (num - 1) IS in the set -> not a start -> skip this num
            if(numSet.has(num - 1)){
                continue;
            }
            
            let length = 1;
            while(numSet.has(num+length)){
                length++;
            }

            // 3. best = Math.max(best, length)
            best = Math.max(best, length)
        }

        return best;
    }
}
