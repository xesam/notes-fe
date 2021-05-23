function* main() {
    const x = yield 'hello world';
    console.log(x);
}

const it = main();
it.next();
try {
    it.throw('oops');
} catch (e) {
    console.log('outer1 error', e);
}

function* main2() {
    try {
        const x = yield 'hello world';
    } catch (e) {
        console.log('main2 error', e);
    }
}

const it2 = main2();
const val2 = it2.next();
console.log('val2=', val2);
try {
    const ret = it2.throw('oops');
    console.log('ret=', ret);
} catch (e) {
    console.log('outer2 error', e);
}