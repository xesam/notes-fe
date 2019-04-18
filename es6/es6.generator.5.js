function run(taskDef) {
    let task = taskDef();
    let result = task.next();

    function step() {
        if (!result.done) {
            if (typeof result.value === 'function') {
                result.value((err, data) => {
                    if (err) {
                        result = task.throw(err);
                        return;
                    }
                    result = task.next(data);
                    step();
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
    console.log(c);
});

