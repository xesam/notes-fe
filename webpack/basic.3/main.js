let axios = require("axios");

axios
    .get("/proxy")
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(err) {
        console.log(err);
    });

//https://www.baidu.com/s?wd=vue
