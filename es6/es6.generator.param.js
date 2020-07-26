const assert = require('assert');

function* it() {
    const first = yield 1;
    const second = yield first + 2;
    yield second + 3;
}

const it_1 = it();
const next_1_1 = it_1.next();
assert.strictEqual(next_1_1.value, 1);
const next_1_2 = it_1.next();
assert.strictEqual(next_1_2.value, NaN);
const next_1_3 = it_1.next();
assert.strictEqual(next_1_3.value, NaN);

const it_2 = it();
const next_2_1 = it_2.next();
assert.strictEqual(next_2_1.value, 1);
const next_2_2 = it_2.next(100);
assert.strictEqual(next_2_2.value, 102);
const next_2_3 = it_2.next(200);
assert.strictEqual(next_2_3.value, 203);


function* sub() {
    yield 100;
    return 200;
}

function* gen2() {
    const first = yield* sub();
    const second = yield first + 2;
    yield second + 3;
}

const it_3 = gen2();
const next_3_1 = it_3.next();
assert.strictEqual(next_3_1.value, 100);

const next_3_2 = it_3.next();
assert.strictEqual(next_3_2.value, 202);

const next_3_3 = it_3.next();
assert.strictEqual(next_3_3.value, NaN);