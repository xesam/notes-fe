var assert = require("assert");

(() => {
  var evs = [];
  var vals = [];
  for (var i = 0; i < 3; i++) {
    vals.push(i);
    evs.push(function () {
      return i;
    });
  }

  evs.forEach(function (fn) {
    var i = fn();
    assert.notStrictEqual(vals.shift(), i); //notStrictEqual
  });
})();

(() => {
  var evs = [];
  var vals = [];
  for (let i = 0; i < 3; i++) {
    vals.push(i);
    evs.push(function () {
      return i;
    });
  }

  evs.forEach(function (fn) {
    var i = fn();
    assert.strictEqual(vals.shift(), i); //strictEqual
  });
})();
