(function f() {
    function* foo(fn) {
        return yield fn();
    }

    function test() {
        setTimeout(function () {
            const res = it.next({content: 'this is data'});
            console.log(res.value);
        }, 2000);
        return 100;
    }

    const it = foo(test);
    const res = it.next();
    console.log(res.value === 100);
})();

(function f() {
    function* foo(fn) {
        return yield fn();
    }

    function test() {
        return new Promise(resolve => {
            setTimeout(function () {
                resolve({content: 'this is data'});
            }, 2000);
        })
    }

    const it = foo(test);
    const res = it.next();
    console.log(res.value.constructor === Promise);
    res.value.then(data => {
        console.log(data);
    });
})();