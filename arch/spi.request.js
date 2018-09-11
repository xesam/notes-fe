let IRequest = require('./api.request').Request;

class Request extends IRequest {
    get(status) {
        if (status === 1) {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    resolve(JSON.stringify({
                        name: 'xesam',
                        age: 18
                    }));
                }, 1000);
            })
        } else if (status === 2) {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    reject(JSON.stringify({
                        status: 200,
                        msg: 'need param'
                    }));
                }, 1000);
            })
        } else {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    reject(JSON.stringify({
                        status: 404,
                        msg: 'net error'
                    }));
                }, 1000);
            })
        }
    }
}

exports.Request = Request;
