const _ = require("underscore");
const assert = require('assert');

let array_1 = [3, 2, 1];
_.each(array_1, (element, index, list) => {
    assert.equal(element, array_1[index], 'not index');
    assert.equal(list, array_1, 'not list');
});

let obj_1 = {a: 3, b: 2, c: 1};
_.each(obj_1, (value, key, list) => {
    console.log(value, key, list);
    assert.equal(value, obj_1[key], 'not key');
    assert.equal(list, obj_1, 'not list');
});


