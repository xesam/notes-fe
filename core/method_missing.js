let a = [];

let obj = {};

let fn = function() {};
let fn_proxy = new Proxy(fn, {
    get(taret, key, receiver) {
        console.log(taret, key);
        return null;
    }
});

console.log(fn_proxy[0]);
