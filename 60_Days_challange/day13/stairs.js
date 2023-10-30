let climbStairs = (n) => {

    if (n < 2) {
        return 1;
    }

    let firstStep = 1;

    let secondStep = 1;

    let thirdStep = 0;

    for (let i = 2; i <= n; i++) {

        thirdStep = firstStep + secondStep;

        firstStep = secondStep;

        secondStep = thirdStep;
    }
    return thirdStep;
};

const n = 2;
console.log(climbStairs(n));