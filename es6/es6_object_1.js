var assert = require("assert");

(function(){
    var name = 'xesam';
    var age = 18;
    var obj1 = {name, age};//同名键值对，混淆怎么处理？
    assert.strictEqual(name, 'xesam');
    assert.strictEqual(obj1['name'], 'xesam');
    assert.strictEqual(obj1['age'], 18);
})();

(function(){
    var obj2 = {
        name : 'xesam',
        sayName(){ //简化的函数定义
            console.log('hello ', this.name);
        }
    };
    obj2.sayName();
})();

(function(){
    var key = 'blank key'

    var obj3 = {
        key : 'this is value A',
        [key] : 'this is value B' //可计算属性
    };
    console.log(obj3['key']);
    console.log(obj3[key]);
})();