function create() {

    return new Proxy(
        {
            save() {
                console.log('save, name=', this.name);
            }
        },
        {
            set(trap_target, key, value, receiver) {
                Reflect.set(trap_target, key, value, receiver);
            }
        })
}

rec = create();
rec.name = 'xesam';
rec.save();