const assert = require('assert');

let con = 1;

function* it() {
    yield con + 1;
    yield con + 2;
    yield con + 3;
}

let i = it();
assert.strictEqual(i.next().value, 2);
con++;
assert.strictEqual(i.next().value, 4);
con++;
assert.strictEqual(i.next().value, 6);
con++;
assert.strictEqual(i.next().value, undefined);
con++;
assert.strictEqual(i.next().value, undefined);
con++;
