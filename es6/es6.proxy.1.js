let trap_target = {};
let proxy = new Proxy(trap_target, {
    set(trap_target, key, value, receiver) {
        if (trap_target.hasOwnProperty(key)) {
            console.log('hasOwnProperty', trap_target, key, value, receiver);
        } else {
            Reflect.set(trap_target, key, value);
        }
    }
});

proxy.name = 'this is first value';

console.log(proxy.name);
console.log(trap_target.name);

proxy.name = 'this is second value';

console.log(proxy.name);
console.log(trap_target.name);