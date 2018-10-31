const _ = require("underscore");
const assert = require('assert');

let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
let val_1 = _.pluck(stooges, 'name');
assert.deepEqual(val_1, ["moe", "larry", "curly"]);
