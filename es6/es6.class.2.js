const C = require('./es6.class');

let s11 = new C.Stack1();
s11.push(1);
s11.push(2);
s11.push(3);
console.log(s11.items.length);
console.log(s11.size());

let s12 = new C.Stack1();
s12.push(1);
s12.push(2);
s12.push(3);
console.log(s12.items.length);
console.log(s12.size());

console.log('------------------');
let s21 = new C.Stack2();

s21.push(1);
s21.push(2);
s21.push(3);
// console.log(s12.items.length); // error
console.log(s12.size());
let s22 = new C.Stack2();

s22.push(1);
s22.push(2);
s22.push(3);
// console.log(s22.items.length); // error
console.log(s22.size());

console.log('------------------');

let s31 = new C.Stack3();
s31.push(1);
s31.push(2);
s31.push(3);
// console.log(s31.items.length); // error
console.log(s31.size());

let s32 = new C.Stack3();
s32.push(1);
s32.push(2);
s32.push(3);
// console.log(s32.items.length); // error
console.log(s32.size());


