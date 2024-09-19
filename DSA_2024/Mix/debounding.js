const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

const add = (a, b) => console.log(a + b);
const debouncedAdd = debounce(add, 500);

debouncedAdd(2, 3);


