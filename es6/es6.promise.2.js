let creator = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(seconds);
        }, seconds * 1000);
    });
};

let p1 = creator(1);
let p2 = creator(2);
let p3 = creator(3);

Promise.all([p2, p3, p1]).then(values => {
    console.log(values[0] === 2);
    console.log(values[1] === 3);
    console.log(values[2] === 1);
});
