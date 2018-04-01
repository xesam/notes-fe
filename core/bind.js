Function.prototype.__bind = function () {
    console.log('__bind');
    let self = this;
    let slice = Array.prototype.slice;
    let _this = arguments[0];
    let args = slice.call(arguments, 1);
    let nop = function () { };
    let bound = function () {
        let _args = args.concat(slice.call(arguments));
        self.apply(_this, _args);
    };
    nop.prototype = self.prototype;
    bound.prototype = new nop();
    return bound;
};

function Binder() {
    this.name = 'origin';
    this.age = 18;
}

Binder.prototype.sayName = function () {
    console.log(this.name);
};

Binder.prototype.sayAge = function () {
    console.log(this.age);
};

let obj = { name: 'xesam', age: 19 };
(new Binder()).sayName();//origin
(new Binder()).sayName.bind()();//undefined
(new Binder()).sayName.bind({ name: 'xesam' })();//xesam
(new Binder()).sayName.__bind({ name: 'xesam' })();//xesam
(new (Binder.__bind(obj))()).sayName();//undefined