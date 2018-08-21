const assert = require('assert');
const ms = require("ms");

assert.equal(172800000, ms('2 d'));
assert.equal('10 hours', ms(ms('10 hours'), {long: true}));
assert.equal('10h', ms(ms('10 hours'), {long: false}));
