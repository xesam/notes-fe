let con = 1;

function* it() {
    yield con + 1;
    yield con + 2;
    yield con + 3;
}

let i = it();
console.log(i.next());
con++;
console.log(i.next());
con++;
console.log(i.next());
con++;
console.log(i.next());
con++;
console.log(i.next());
con++;
