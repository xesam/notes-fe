Function.prototype.__bind = function () {
    console.log('__bind');
};

function bind() {
    this.name = 'origin name';
}

bind.prototype.sayName = function () {
    console.log(this.name);
}

(new bind()).sayName();
(new bind()).sayName.bind({ name: 'xesam' })();
// bind.__bind();