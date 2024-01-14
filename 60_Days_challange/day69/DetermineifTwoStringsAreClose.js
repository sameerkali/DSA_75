const closeStrings = (w1, w2) => {
    if (w1.length !== w2.length) {
        return false;
    }

    const freq1 = Array(26).fill(0);
    const freq2 = Array(26).fill(0);

    for (let i = 0; i < w1.length; i++) {
        freq1[w1[i].charCodeAt(0) - 97]++;
        freq2[w2[i].charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < freq1.length; i++) {
        if ((freq1[i] > 0 && freq2[i] === 0) || (freq2[i] > 0 && freq1[i] === 0)) {
            return false;
        }
    }

    // Sort based on character codes
    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    return freq1.join('') === freq2.join('');
};

const word1 = "abc";
const word2 = "bca";

console.log(closeStrings(word1, word2)); // Output: true
