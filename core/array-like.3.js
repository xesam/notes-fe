"use strict";

let arr = [1, 2, 3, 4, 5];

let arr_proxy = new Proxy(arr, {
    get(taret, key, receiver) {
        console.log(taret, key);
        return null;
    }
});

console.log(arr[1]);
console.log(arr["01"]);

arr_proxy[0];
arr_proxy[1];
arr_proxy["1"];
