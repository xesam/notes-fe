const assert = require('assert');

function* gen() {
    yield 1;
    return 100;
}

const it_1 = gen();

const next_1_1 = it_1.next();
assert.strictEqual(next_1_1.done, false);
assert.strictEqual(next_1_1.value, 1);

const next_1_2 = it_1.next();
assert.strictEqual(next_1_2.done, true);
assert.strictEqual(next_1_2.value, 100);

const next_1_3 = it_1.next();
assert.strictEqual(next_1_3.done, true);
assert.strictEqual(next_1_3.value, undefined);
