let obj = {
    [Symbol.iterator]: function() {
        var index = 0;
        return {
            next() {
                if (index < 3) {
                    let val = index + 1;
                    index++;
                    return { value: val, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

console.log([...obj]);
console.log(Array.from(obj));
console.log([].slice.call(obj, 0));

let obj2 = {
    length: 3,
    0:10,
    1:11,
    2:12
};

// console.log([...obj2]);//error obj2 is not iterable

console.log(Array.from(obj2));
console.log([].slice.call(obj2, 0));
