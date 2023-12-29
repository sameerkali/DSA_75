/**
 * @param {number[]} jobs
 * @param {number} d
 * @return {number}
 */
const minDifficulty = (jobs, d) => {
    const n = jobs.length;
    if (n < d) return -1;
        const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--)
        dp[i] = jobs[i] > dp[i + 1] ? jobs[i] : dp[i + 1];

    for (let i = 2; i <= d; i++)
        for (let j = 0; j <= n - i; j++) {
            let max = 0;
            dp[j] = Infinity;
            for (let k = j; k <= n - i; k++) {
                if (jobs[k] > max) max = jobs[k];
                if (dp[j] > dp[k + 1] + max) dp[j] = dp[k + 1] + max;
            }
        }

    return dp[0];
};