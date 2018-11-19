class Stack1 {
    constructor() {
        this.items = [];
    }

    push(item) {
        return this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    size() {
        return this.items.length;
    }
}

let Stack2 = (function () {
    let items = [];

    class Stack {
        constructor() {
        }

        push(item) {
            return items.push(item);
        }

        pop() {
            return items.pop();
        }

        size() {
            return items.length;
        }
    }

    return Stack;
})();

let Stack3 = (function () {
    let items = new WeakMap();

    class Stack {
        constructor() {
            items.set(this, []);
        }

        push(item) {
            return items.get(this).push(item);
        }

        pop() {
            return items.get(this).pop();
        }

        size() {
            return items.get(this).length;
        }
    }

    return Stack;
})();

let Stack4 = (function () {
    let items = new WeakMap();

    class Stack {
        constructor() {
            items.set(this, []);
        }

        push(item) {
            return items.get(this).push(item);
        }

        pop() {
            return items.get(this).pop();
        }

        size() {
            return items.get(this).length;
        }
    }

    return Stack;
})();

exports.Stack1 = Stack1;
exports.Stack2 = Stack2;
exports.Stack3 = Stack3;
exports.Stack4 = Stack4;
