const _ = require("underscore");
const assert = require('assert');

let value_1_1 = _.reduce(
    [3, 2, 1],
    (memo, element, index, list) => {
        return memo + element;
    },
    100
);

assert.equal(value_1_1, 106);

let value_1_2 = _.reduce(
    [3, 2, 1],
    (memo, element, index, list) => {
        assert.notEqual(element, 3);
        return memo + element;
    }
);

assert.equal(value_1_2, 6);

let value_1_3 = _.reduce(
    [3, 2, 1],
    (memo, element, index, list) => {
        return memo + list[index];
    },
    100
);

assert.equal(value_1_3, 106);

let value_2_1 = _.reduce(
    {a: 3, b: 2, c: 1},
    (memo, value, key, list) => {
        return memo + value;
    },
    100
);
assert.equal(value_2_1, 106);

let value_2_2 = _.reduce(
    {a: 3, b: 2, c: 1},
    (memo, element, key, list) => {
        return memo + list[key];
    },
    100
);
assert.equal(value_2_2, 106);
