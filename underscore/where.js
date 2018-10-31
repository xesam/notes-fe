const _ = require("underscore");
const assert = require('assert');

let list_1 = ['a', 'b', 'c', 'd'];
let val_1 = _.where(list_1, 'a');
assert.equal(val_1, 'a');

let list_2 = [{a: 1, b: 2, c: 3, d: 4}, {a: 10, b: 2, c: 30, d: 40}];
let val_2 = _.where(list_2, {b: 2});
assert.deepEqual(val_2, list_2);

let list_3 = [{a: 1, b: 2, c: 3, d: 4}];
let val_3 = _.where(list_3, {b: 20});
assert.deepEqual(val_3, []);
