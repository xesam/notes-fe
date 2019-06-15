"use strict";

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let n = [1, 2, 3];
let dn = n.map(e => e * 2);
let pro = {
  name: 'mike',
  age: 18
};
pro = _objectSpread({}, pro, {
  sex: 'male'
});
console.log(dn);
console.log(pro);