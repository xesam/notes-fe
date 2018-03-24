var assert = require("assert");

(() => {
  var a = 1;
  {
    let a = 2;
  }

  assert.deepEqual(a, 1);
})();

(() => {
  var a = 1;
  {
    var a = 2;
  }

  assert.deepEqual(a, 2);
})();

