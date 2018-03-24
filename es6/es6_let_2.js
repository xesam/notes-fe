var assert = require("assert");

(() => {
  var evs = [];
  for (i = 0; i < 3; i++) {
    var val = i; //this
    evs.push(function() {
      console.log(val);
    });
  }

  evs.forEach(function(fn) {
    fn();
  });
})();

(() => {
  var evs = [];
  for (i = 0; i < 3; i++) {
    let val = i; //this
    evs.push(function() {
      console.log(val);
    });
  }

  evs.forEach(function(fn) {
    fn();
  });
})();
