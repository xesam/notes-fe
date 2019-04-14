function* it() {
    yield 1;
    yield 2;
    yield 3;
}

let i = it();
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
