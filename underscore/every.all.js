const _ = require("underscore");
const assert = require('assert');

let list_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(() => {
    let val_1 = _.every(list_1, (element) => {
        return element > 5;
    });
    assert.equal(val_1, false);

    let val_2 = _.every(list_1, (element, index, list) => {
        return list[index] > 5;
    });
    assert.equal(val_2, false);

    let val_3 = _.every(list_1, (element, index, list) => {
        return element > 0;
    });
    assert.equal(val_3, true);
})();

(() => {
    let val_1 = _.all(list_1, (element) => {
        return element > 5;
    });
    assert.equal(val_1, false);

    let val_2 = _.all(list_1, (element, index, list) => {
        return list[index] > 5;
    });
    assert.equal(val_2, false);

    let val_3 = _.all(list_1, (element, index, list) => {
        return element > 0;
    });
    assert.equal(val_3, true);
})();


