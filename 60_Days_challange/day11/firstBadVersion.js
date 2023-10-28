var solution = function (isBadVersion: any) {
    return function (n: number): number {
        let low = 1;
        let high = n;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const ans = isBadVersion(mid);
            ans ? high = mid - 1 : low = mid + 1;
        }
        return low;
    };
};