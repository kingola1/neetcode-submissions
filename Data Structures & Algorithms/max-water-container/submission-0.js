class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let best = 0;

        while (l < r) {
            // 1. the height is the SHORTER of the two bars
            const height = Math.min(heights[l], heights[r]);

            // 2. the width is the distance between the pointers
            const width = r - l;

            // 3. keep the best area seen so far
            best = Math.max(best, height * width);

            // 4. move the shorter one inward
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return best;
    }
}
