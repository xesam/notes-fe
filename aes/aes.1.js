const aesjs = require('aes-js');

const BLOCK_SIZE = 16;

function split2(str) {
    let items = str.split('');
    let itemsOdd = items.filter((ele, index) => index % 2 !== 0);
    let itemsEven = items.filter((ele, index) => index % 2 === 0);
    return itemsOdd.map((ele, index) => {
        return [itemsEven[index], ele];
    }).map(ele => ele.join('')).map(ele => {
        return parseInt(ele, 16)
    });
}

function PKCS5Padding(text) {
    let len = text.length;
    let remainder = len % BLOCK_SIZE;
    let padding = BLOCK_SIZE - remainder;
    let codes = text.split('').map(ele => ele.charCodeAt(0));
    for (let i = remainder; i < BLOCK_SIZE; i++) {
        codes.push(padding);
    }
    return codes;
}

function parseKey(key) {
    return split2(key);
}

function parseIv(iv) {
    return split2(iv);
}

function encrypt(text, key, iv) {
    key = parseKey(key);
    iv = parseIv(iv);
    text = aesjs.utils.utf8.fromBytes(PKCS5Padding(text));
    let textBytes = aesjs.utils.utf8.toBytes(text);
    let aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    let encryptedBytes = aesCbc.encrypt(textBytes);
    return aesjs.utils.hex.fromBytes(encryptedBytes);
}

function decrypt(encrypted, key, iv) {
    key = parseKey(key);
    iv = parseIv(iv);
    let encryptedBytes = aesjs.utils.hex.toBytes(encrypted);
    let aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    let decryptedBytes = aesCbc.decrypt(encryptedBytes);
    decryptedBytes = decryptedBytes.filter(ele => ele > BLOCK_SIZE);
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
}

//KEY 37018b97111147b295a0b438c67ff54a
//IV 6572434969fe497e9f2f35d131f08765
// 明文：a
// 密文：0ec60dfdc38f86163bca83347955eaf9
let encryptedHex = encrypt('a', '37018b97111147b295a0b438c67ff54a', '6572434969fe497e9f2f35d131f08765');
console.log(encryptedHex === '0ec60dfdc38f86163bca83347955eaf9');

// 明文："abcdefghijklmnopqrst"
// 密钥key："6162636465666768696a6b6c6d6e6f70"
// 偏移量iv："6162636465666768696a6b6c6d6e6f70"
// 密文：f5657e278d0afad7c848b965898c31df2fce53fee2f55f77833b14981529bee1
let encryptedHex2 = encrypt('abcdefghijklmnopqrst', '6162636465666768696a6b6c6d6e6f70', '6162636465666768696a6b6c6d6e6f70');
console.log(encryptedHex2 === 'f5657e278d0afad7c848b965898c31df2fce53fee2f55f77833b14981529bee1');

let decrypted1 = decrypt('0ec60dfdc38f86163bca83347955eaf9', '37018b97111147b295a0b438c67ff54a', '6572434969fe497e9f2f35d131f08765');
console.log('a' === decrypted1);
let decrypted2 = decrypt('f5657e278d0afad7c848b965898c31df2fce53fee2f55f77833b14981529bee1', '6162636465666768696a6b6c6d6e6f70', '6162636465666768696a6b6c6d6e6f70');
console.log('abcdefghijklmnopqrst' === decrypted2);
