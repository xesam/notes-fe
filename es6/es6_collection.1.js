var assert = require("assert");

(function() {
  let set1 = new Set([1, 1, 2, 3, 4, 5, 5, 6]);
  assert.equal(set1.size, 6);
  assert.strictEqual(set1.has(1), true);
  assert.strictEqual(set1.has(10), false);

  set1.forEach(function(key, value, self) {
    assert.strictEqual(key, value);
    assert.strictEqual(set1, self);
  });

  set1.forEach(function(key, value, self) {
    assert.strictEqual(this, set1);
  }, set1);
})();
