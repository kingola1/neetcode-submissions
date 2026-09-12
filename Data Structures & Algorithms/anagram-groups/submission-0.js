class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();

        for (const word of strs) {
            // 1. canonical key: split, sort, join
            let key = word.split("").sort().join("")

            // 2. if the key isn't in the map yet, create an empty array for it
            //    (this is the || 0 trick, but the default is [] instead of 0)
            if(!groups.has(key)){
                groups.set(key, []);
            }

            // 3. push word onto the array under that key
            groups.get(key).push(word);
        }

        // 4. return all the values as one array
        return Array.from(groups.values());
    }
}
