const assert = require('assert');

function* gen1() {
    yield 100;
    yield 200;
}

function* gen2() {
    yield 300;
}

function* gen3() {
    yield* gen1();
    yield* gen2();
}

const it = gen3();

const r1 = it.next();
assert.strictEqual(100, r1.value);
assert.strictEqual(false, r1.done);

const r2 = it.next();
assert.strictEqual(200, r2.value);
assert.strictEqual(false, r2.done);

const r3 = it.next();
assert.strictEqual(300, r3.value);
assert.strictEqual(false, r3.done);

const r4 = it.next(3);
assert.strictEqual(undefined, r4.value);
assert.strictEqual(true, r4.done);
