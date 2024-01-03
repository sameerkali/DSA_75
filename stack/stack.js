/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {


    const totalLasers = []; // totalLasers in each row
    let totalBeams = 0;

    for (let i = 0; i < bank.length; i++) {
        let currentLasers = 0; // laser device in current row

        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === '1') {
                currentLasers += 1
            }
        }

        if (currentLasers) {
            totalLasers.push(currentLasers);
        }
    }

    for (let i = 0; i + 1 < totalLasers.length; i++) {
        totalBeams += totalLasers[i] * totalLasers[i + 1];
    }

    return totalBeams;

};