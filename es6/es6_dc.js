assert = require('assert');
(function() {
  let opt = {
    name: "xesam",
    age: 18
  };

  let { name, age } = opt;

  console.log(name);
  console.log(age);
})();

(function() {
  let opt = {
    name: "xesam",
    age: 18
  };

  let { name, age, val_2 = "default value" } = opt;

  console.log(name);
  console.log(age);
  console.log(val_2);
})();

(function() {
  let opt = {
    name: "xesam",
    age: 18
  };

  let {
    name: new_name,
    age: new_age,
    val_2: new_val_2 = "default value"
  } = opt;

  console.log(new_name);
  console.log(new_age);
  console.log(new_val_2);
})();

(function() {
  let opt = {
    name: "xesam",
    info: {
      age: 18
    }
  };

  let { info: { age, val = "default" }, name } = opt;

  //   console.log(info);//error
  console.log(age);
  console.log(val);
  console.log(name);
})();

(function() {
  let arr = ["a", "b", "c", "d"];
  let [a, b, , d, e = "e"] = arr;
  console.log(a, b, d, e);
})();

(function() {
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  assert.equal(a, 2);
  assert.equal(b, 1);
})();

//不定元素
(function() {
  let arr = [1, 2, 3, 4];
  let [a, ...rest] = arr;
  assert.equal(rest.length, 3);
})();

//结构参数应用默认值以后，变得更加冗长了，真是令人尴尬。
