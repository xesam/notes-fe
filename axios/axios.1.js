const axios = require("axios");

//添加一个请求拦截器
axios.interceptors.request.use(
    function (config) {
        console.log(config.headers);
        return config;
    },
    function (err) {
        //Do something with request error
        return Promise.reject(err);
    });

//添加一个响应拦截器
axios.interceptors.response.use(
    function (res) {
        console.log(res.status);
        return res;
    },
    function (err) {
        return Promise.reject(err);
    });

axios.get("https://xesam.github.io/").then(function (response) {
    console.log(response.status);
});
