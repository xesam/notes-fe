const e = '😊';
const a = `${e}a1`;
console.log(e.length)
console.log(a.length);

console.log(e);
for (let i of a) {
    console.log(i, i.length);
}

const fs = require('fs');
const buffer = fs.readFileSync('./data.txt');
console.log(buffer.byteLength);
console.log(buffer.toString())

