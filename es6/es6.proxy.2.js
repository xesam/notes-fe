let target = {
    __name: 'target',
    method_missing: function () {

    }
};
let proxy = new Proxy(target, {
    get(target, key, receiver) {
        // console.log(target, key, receiver);
        console.log('get');
        if (!target[key]) {
            console.log('empty');
        }
        return Reflect.get(target, key, receiver);
    }
});

console.log(target.__name);
console.log(proxy.__name);
console.log(proxy.fn);