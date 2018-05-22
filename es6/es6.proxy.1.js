let target = {
    __name: 'target'
};
let proxy = new Proxy(target, {
    set(target, key, value, receiver) {
        console.log(target, key, value, receiver);
    }
});

proxy.name = 'proxy';

console.log(proxy.name);
console.log(target.name);

target.name = 'target';

console.log(proxy.name);
console.log(target.name);