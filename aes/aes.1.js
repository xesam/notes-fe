const aesjs = require('aes-js');

const key = [0x37, 0x01, 0x8b, 0x97, 0x11, 0x11, 0x47, 0xb2, 0x95, 0xa0, 0xb4, 0x38, 0xc6, 0x7f, 0xf5, 0x4a];
const iv = [0x65, 0x72, 0x43, 0x49, 0x69, 0xfe, 0x49, 0x7e, 0x9f, 0x2f, 0x35, 0xd1, 0x31, 0xf0, 0x87, 0x65];

function PKCS5Padding(text) {
    const blockSize = 16;
    if (!text || text.length >= blockSize) {
        throw Error('text length error');
    }
    let len = text.length;
    let padding = blockSize - len;
    let codes = text.split('').map(ele => ele.charCodeAt(0));
    for (let i = len; i < blockSize; i++) {
        codes.push(padding);
    }
    return codes;
}

let text = aesjs.utils.utf8.fromBytes(PKCS5Padding('a'));
let textBytes = aesjs.utils.utf8.toBytes(text);
let aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
let encryptedBytes = aesCbc.encrypt(textBytes);
let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

// 明文：a
// 密文：0ec60dfdc38f86163bca83347955eaf9

console.log(encryptedHex === '0ec60dfdc38f86163bca83347955eaf9');

