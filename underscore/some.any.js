const _ = require("underscore");
const assert = require('assert');

let list_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(() => {
    let val_1 = _.some(list_1, (element) => {
        return element > 5;
    });
    assert.equal(val_1, true);

    let val_2 = _.some(list_1, (element, index, list) => {
        return list[index] > 5;
    });
    assert.equal(val_2, true);

    let val_3 = _.some(list_1, (element, index, list) => {
        return element > 100;
    });
    assert.equal(val_3, false);
})();

(() => {
    let val_1 = _.any(list_1, (element) => {
        return element > 5;
    });
    assert.equal(val_1, true);

    let val_2 = _.any(list_1, (element, index, list) => {
        return list[index] > 5;
    });
    assert.equal(val_2, true);

    let val_3 = _.any(list_1, (element, index, list) => {
        return element > 100;
    });
    assert.equal(val_3, false);
})();


