const assert = require('assert');

const p1 = Promise.resolve(100);
p1.then(res => {
    assert.strictEqual(res, 100, 'not 100');
});
p1.then(res => {
    assert.strictEqual(res, 100, 'not 100');
});

const p2 = Promise.resolve(p1);
assert.strictEqual(p1, p2);

const p3 = Promise.reject(p1);
assert.notStrictEqual(p1, p3);

const p4 = new Promise(resolve => {
    resolve(p1);
});
assert.notStrictEqual(p1, p4);
