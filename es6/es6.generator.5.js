const assert = require('assert');

function run(taskDef) {
    let task = taskDef();
    let result = task.next();

    function step() {
        if (!result.done) {
            if (typeof result.value === 'function') {
                result.value((err, data) => {
                    if (err) {
                        result = task.throw(err);
                    } else {
                        result = task.next(data);
                        step();
                    }
                });
            } else {
                result = task.next();
                step();
            }
        }
    }

    step();
}

function fetchData() {
    return function (cbk) {
        setTimeout(() => {
            cbk(null, 'hello');
        })
    }
}

run(function* () {
    let c = yield fetchData();
    assert.strictEqual(c, 'hello');
});

run(function* () {
    let sum = 0;
    try {
        let c = yield function (cbk) {
            setTimeout(() => {
                cbk(Error('this is a error'));
            })
        };
        sum += 100;
    } catch (e) {
        sum += 200;
    }
    assert.strictEqual(sum, 200);
});
