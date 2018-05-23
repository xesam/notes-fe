let target = {
    __name: 'target',
    __missing: function (...args) {
        console.log(args);
    }
};
let proxy = new Proxy(target, {
    get(target, key, receiver) {
        if (!target[key]) {
            return target.__missing;
        } else {
            return Reflect.get(target, key, receiver);
        }
    }
});

console.log(target.__name);
console.log(proxy.__name);
let fn = proxy.fn;
fn(1, 2, 3, 4, 5);