class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let grouped_strings = [];
        for(const word of strs){
            let count = word.length;

            grouped_strings.push(`${count}#${word}`)
        }

        return grouped_strings.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;                                  // find the '#'
            }

            const length = Number(str.slice(i, j));   // blanks 1 & 2
            res.push(str.slice(j+1, j+1+length));                // blanks 3 & 4
            i = j + 1 + length;                                         // blank 5
        }
        return res;
    }
}
