const _ = require("underscore");
const assert = require('assert');

let collection_1 = _.map([3, 2, 1], (element, index, list) => {
    return element + 1;
});

assert.deepEqual(collection_1, [4, 3, 2], 'collection_1 error');

let collection_2 = _.map([3, 2, 1], (element, index, list) => {
    return list[index] + 1;
});

assert.deepEqual(collection_2, [4, 3, 2], 'collection_2 error');

let collection_3 = _.map({a: 3, b: 2, c: 1}, (value, key, list) => {
    return value + 1;
});

assert.deepEqual(collection_3, [4, 3, 2], 'collection_3 error');

let collection_4 = _.map({a: 3, b: 2, c: 1}, (value, key, list) => {
    return list[key] + 1;
});

assert.deepEqual(collection_4, [4, 3, 2], 'collection_4 error');

