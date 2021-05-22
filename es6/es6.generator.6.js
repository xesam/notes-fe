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