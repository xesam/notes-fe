let axios = require("axios");

axios
    .get("/proxy")
    .then(function (response) {
        console.log(response.status);
    })
    .catch(function (err) {
        console.log(err);
    });
