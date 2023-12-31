var maxLengthBetweenEqualCharacters = function(s) {
    let current = s.length - 1;
        for (let i = s.length - 1; i > 0; i--) {
            for (let j = 0; j + i < s.length; j++) {
                if (s[j] === s[j + i]) {
                    return i - 1;
                }
            }
            current--;
        }
        return -1;
};