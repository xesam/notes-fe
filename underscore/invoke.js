const _ = require("underscore");
const assert = require('assert');

let list_1 = ['a', 'b', 'c'];

let val_1 = _.invoke(list_1, 'toUpperCase');
assert.deepEqual(val_1, ['A', 'B', 'C']);

let val_2 = _.invoke(list_1, 'startsWith', 'a');
assert.deepEqual(val_2, [true, false, false]);
