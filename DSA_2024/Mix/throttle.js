const throttle = (fn, delay) => {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        }
    };
};

const log = (msg) => console.log(msg);
const throttledLog = throttle(log, 1000);

throttledLog("Hello"); 