const assert = require('assert');

function run(taskDef) {
    let task = taskDef();
    let result = task.next();

    function step() {
        if (!result.done) {
            result = task.next(result.value);
            step();
        }
    }

    step();
}

run(function* () {
    const r1 = yield 100;
    assert.strictEqual(100, r1);
    const r2 = yield 200 + r1;
    assert.strictEqual(300, r2);
});

