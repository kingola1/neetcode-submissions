class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // setup your map
        const seen = new Map();

        for (let i = 0; i < nums.length; i++){
            seen.set(nums[i], (seen.get(nums[i]) || 0) + 1);
        }

        const counts = Array.from(seen.entries())

        counts.sort((a,b) => b[1] - a[1])

        return counts.slice(0, k).map(pair => pair[0]);
    }
}
