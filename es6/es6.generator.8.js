function run(gen) {
    const args = [].slice.call(arguments, 1);
    const it = gen.apply(this, args);
    return Promise.resolve()
        .then(function handleNext(value) {
            const next = it.next(value);
            return (function handleResult(next) {
                if (next.done) {
                    return next.value;
                } else {
                    return Promise.resolve(next.value)
                        .then(handleNext, function handleError(err) {
                            return Promise.resolve(it.throw(err))
                                .then(handleResult);
                        })
                }
            })(next);
        })
}

function foo() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve({first: 'foo'});
        }, 1000);
    });
}

function bar(data) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve({...data, second: 'bar'});
        }, 1000);
    });
}

function* main() {
    try {
        const data1 = yield foo();
        const data2 = yield bar(data1);
        return {...data2, third: 'main'};
    } catch (e) {
        return {
            msg: '[main] error'
        }
    }
}

run(main).then(data => {
    console.log(data);
});