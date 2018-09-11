let api = require('./api').api;

api.getUser(1).then(user => {
    console.log(`${user.name}:${user.age}`);
}).catch(err => {
    console.log(`${err.status}:${err.msg}`);
});

api.getUser(2).then(user => {
    console.log(`${user.name}:${user.age}`);
}).catch(err => {
    console.log(`${err.status}:${err.msg}`);
});

api.getUser(3).then(user => {
    console.log(`${user.name}:${user.age}`);
}).catch(err => {
    console.log(`${err.status}:${err.msg}`);
});


