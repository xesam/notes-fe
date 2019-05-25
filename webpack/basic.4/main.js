const PRESET = {
    _v: '0.0.1'
};

export default class Person {
    say(content) {
        console.log({
            ...PRESET,
            content
        });
    }
}
