// 迭代器传参的问题

function* it(init) {
    let r1 = yield 1 + init;
    let r2 = yield 2 + r1;
    let r3 = yield 3 + r2;
}

let i = it(100);
console.log(i.next(200));
console.log(i.next(1));
console.log(i.next(2));
console.log(i.next(3));
console.log(i.next(4));
