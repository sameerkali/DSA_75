function *gen(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const sa = [...gen(), 6,7,8]

console.log(sa)

sa.map((a) => (console.log(a)))