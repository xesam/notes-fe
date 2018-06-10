let assert = require("assert");

let str_a = 'abcdefg';
assert.equal(!!str_a.forEach, false);

let b = [].slice(str_a, 0);
assert.equal(!!b.forEach, true);

let c = Array.from(str_a);
assert.equal(!!c.forEach, true);

let d = [...str_a];
assert.equal(!!d.forEach, true);