let o = {
    get num(){
        return this.v;
    },
    set num(v){
        this.v = v;
    }
}

let obj = Object.create(o);
console.log(obj.num);
obj.num = 2;
console.log(obj.num);
