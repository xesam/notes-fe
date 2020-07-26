const assert = require('assert');

function* it() {
    yield 1;
    yield 2;
}

let i = it();
const next_1 = i.next();
assert.strictEqual(next_1.done, false);
assert.strictEqual(next_1.value, 1);
const next_2 = i.next();
assert.strictEqual(next_2.done, false);
assert.strictEqual(next_2.value, 2);
const next_3 = i.next();
assert.strictEqual(next_3.done, true);
assert.strictEqual(next_3.value, undefined);
