let _ = require("underscore");
_.each([3, 2, 1], (...args) => {
    console.log(...args);
});
_.each({ a: 3, b: 2, c: 1 }, (...args) => {
    console.log(...args);
});

console.log("------------map--------------");
console.log(
    _.map([3, 2, 1], (...args) => {
        return args[0] + 1;
    })
);
console.log(
    _.map({ a: 3, b: 2, c: 1 }, (...args) => {
        return args[0] + 2;
    })
);
console.log("------------reduce--------------");
console.log(
    _.reduce(
        [3, 2, 1],
        (memo, element, index, list) => {
            return memo + element;
        },
        100
    )
);
console.log(
    _.reduce(
        { a: 3, b: 2, c: 1 },
        (memo, element, index, list) => {
            return memo + element;
        },
        1000
    )
);
