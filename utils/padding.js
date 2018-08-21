function padding(number, length, prefix) {
    if (String(number).length >= length) {
        return String(number);
    }
    return padding(prefix + number, length, prefix);
}
console.log(padding(3, 5, "0"));
console.log(padding(3, 5, "x"));
