Promise.resolve(42).then(value => {
    console.log(value);
});

Promise.reject(404).then(value => {
    console.log(value);
}).catch(err => {
    console.log(err);
});

new Promise((resolve, reject) => {
    let value = 400;
    console.log(`value=${value}`)
    resolve(value);
}).then(res => {
    console.log(res);
});

console.log('first');
