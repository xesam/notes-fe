const _ = require("underscore");
const assert = require('assert');

let list_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(() => {
    let val_1 = _.contains(list_1, 5);
    assert.equal(val_1, true);

    let val_2 = _.contains(list_1, 50);
    assert.equal(val_2, false);

    let val_3 = _.contains(list_1, 5, 8);
    assert.equal(val_3, false);
})();
