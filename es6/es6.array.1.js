let buffer = new ArrayBuffer(10);
console.log(buffer.byteLength);

let view = new DataView(buffer);
console.log(view.byteLength);

console.log(buffer);
view.setUint8(0, 255);
console.log(buffer);

let arr = new Uint16Array([100, 200, 10000]);
console.log(arr.byteLength);
console.log(arr);

console.log(Uint16Array.BYTES_PER_ELEMENT);