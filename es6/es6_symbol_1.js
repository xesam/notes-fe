const assert = require("assert");

let s_1 = Symbol('a');
let s_2 = Symbol('a');

let a = {
    a: 10,
    [s_1]: 20,
    [s_2]: 30
};

console.log(a['a']);
console.log(a[s_1]);
console.log(a[s_2]);
