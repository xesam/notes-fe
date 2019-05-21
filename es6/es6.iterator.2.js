class Tree {
    constructor(d) {
        this.d = d;
    }

    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.d.length) {
                    return {
                        done: false,
                        value: this.d[index++]
                    }
                } else {
                    return {
                        done: true,
                        value: undefined
                    }
                }
            }
        }
    }
}

let tree = new Tree([10, 20, 30, 40]);
let i = tree[Symbol.iterator]();
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());

i = tree[Symbol.iterator]();
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
