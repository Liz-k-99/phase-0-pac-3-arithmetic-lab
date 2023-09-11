const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a/b;
};

const increment = n => {
    n = parseInt(n);
    return ++n;
};

const decrement = n =>{
    n = parseInt(n);
    return --n;
};

const makeInt = n => {
    n = preserveDecimal(n);
    return n;
};

const preserveDecimal = n => {
    n = parseFloat(n);
    return n;
};




