const _ = require("underscore");
const assert = require('assert');

let array_1 = [3, 2, 1];

let target_1 = _.reject(array_1, (element, index, list) => {
    return element > 2;
});

assert.deepEqual(target_1, [2, 1]);

let target_2 = _.reject(array_1, (element, index, list) => {
    return list[index] > 2;
});

assert.deepEqual(target_2, [2, 1]);

let target_3 = _.reject(array_1, (element, index, list) => {
    return list[index] > 20;
});

assert.deepEqual(target_3, [3, 2, 1]);

