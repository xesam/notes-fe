const assert = require('assert');

// 迭代器传参的问题
// next 的参数值会替代上一次 yield 语句的返回值

function* it(init) {
    let r1 = yield 1 + init;
    let r2 = yield 2 + r1;
    return r2;
}

let i = it(100);
// 由于没有上一条 yield 语句，因此 200 这个参数值被丢弃
const r1 = i.next(200);
assert.strictEqual(101, r1.value);
assert.strictEqual(false, r1.done);

const r2 = i.next(1);
assert.strictEqual(3, r2.value);
assert.strictEqual(false, r2.done);

const r3 = i.next(2);
assert.strictEqual(2, r3.value);
assert.strictEqual(true, r3.done);

const r4 = i.next(3);
assert.strictEqual(undefined, r4.value);
assert.strictEqual(true, r4.done);

const r5 = i.next(4);
assert.strictEqual(undefined, r5.value);
assert.strictEqual(true, r5.done);
