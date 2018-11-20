obj = {};

let value = 'xesam';

Object.defineProperty(obj, 'name', {
    get() {
        return value;
    },
    set(n) {
        value = n;
    }
});

console.log(obj.name);
obj.name = 'new name';
console.log(obj.name);

