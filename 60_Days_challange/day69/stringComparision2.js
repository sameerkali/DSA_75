var getLengthOfOptimalCompression = function (s, k) {
  const len = s.length;
  let dp = {};
  function dfs(i, j) {
    if (i === len) return 0;
    const ik = [i, j] + "";
    if (ik in dp) return dp[ik];
    let r = -1;
    if (j) r = dfs(i + 1, j - 1);
    let ii = i + 1;
    let c = 1;
    while (ii <= len) {
      let t = dfs(ii, j) + 1;
      if (c >= 100) {
        t += 3;
      } else if (c >= 10) {
        t += 2;
      } else if (c > 1) {
        t += 1;
      }
      if (r < 0 || r > t) r = t;
      if (ii == len) break;
      if (s[ii] == s[i]) c += 1;
      else {
        if (j == 0) break;
        j -= 1;
      }
      ii += 1;
    }
    dp[ik] = r;
    return r;
  }
  return dfs(0, k);
};
