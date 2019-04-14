{
    let arr = [1, 2, 3];
    for (let item of arr) {
        console.log(item);
    }
}
{
    let obj = {};
    obj[Symbol.iterator] = function*(){
        yield 1;
        yield 2;
        yield 3;
    };
    for (let item of obj) {
        console.log(item);
    }
}