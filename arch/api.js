let Request = require('./spi.request').Request;

const request = new Request();

let api = {

    _res(type) {
        switch (type) {
            case 1:
                return request.get(1).then(res => {
                    return JSON.parse(res);
                });
            case 2:
                return request.get(2).catch(err => {
                    return Promise.reject(JSON.parse(err));
                });
            default:
                return request.get(3).catch(err => {
                    return Promise.reject(JSON.parse(err));
                });
        }
    },

    addRequestInterceptor(interceptor) {

    },

    addResponseInterceptor(interceptor) {

    },

    getUser(type) {
        return this._res(type);
    },

    getTicket() {
        return this._res(type);
    }
};

exports.api = api;
