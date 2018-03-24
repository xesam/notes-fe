var assert = require("assert");

//Object.is()
(function() {
  assert.equal(+0 === -0, true);
  assert.strictEqual(Object.is(+0, -0), false);
  assert.equal(NaN === NaN, false);
  assert.strictEqual(Object.is(NaN, NaN), true);
})();

//Object.assign() 无法复制 访问器属性
(function() {
  var receiver = {};

  Object.assign(
    receiver,
    {
      type: "type 1"
    },
    {
      type: "type 2",
      get name() {
        return "this is get name value";
      }
    }
  );

  assert.strictEqual(receiver.type, "type 2");
  assert.strictEqual(receiver.name, "this is get name value");
})();

(function() {
  var obj = {};
  Object.setPrototypeOf(obj, {
    say() {
      console.log("hello");
    }
  });
  obj.say();
})();

(function() {
  var obj = {};
  //__proto__ 是非标准模式
  obj.__proto__ = {
    say() {
      console.log("hello");
    }
  };
  obj.say();
})();

(function() {
  var super_obj = {
    fn(){
        return "from super_obj";
    }
  };  
  var sub_obj = {
    fn(){
        return super.fn() + " from sub_obj";
    }
  };
  Object.setPrototypeOf(sub_obj, super_obj);
  console.log(sub_obj.fn());
  var third = {};
  Object.setPrototypeOf(third, sub_obj);
  console.log(third.fn());
})();
//super 只能用在对象的简写方法中，因为简写方法才有[[HomeObject]]