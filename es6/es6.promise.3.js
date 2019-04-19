let reject = Promise.reject({
    code: 403
});

reject.then((res) => {
    console.log(res);
}, (err) => {
    console.error(err);
    return {
        code: 100
    };
}).catch((err) => {
    console.error(err);
}).then(res => {
    console.log(res);
    throw Error('err 200');
}).catch((err) => {
    console.error(err.toString());
});
