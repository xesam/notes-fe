class Connector {
    constructor() {
        this._name = 'Connector';
        this._options = [];
        this._invokers = [];
    }

    next(invoker) {
        this._invokers.push(invoker);
        return this;
    }

    invoke(index, ...options) {
        let invoker = this._invokers[index];
        if (invoker) {
            let next = this.invoke.bind(this, index + 1);
            invoker.bind(this, next, ...this._options)(...options);
        }
    }

    run(...options) {
        this._options = [this, ...options];
        this.invoke(0, ...this._options);
    }

    toString() {
        return this._name;
    }
}


new Connector()
    .next((next, connector, app, page) => {
        console.log('1.', connector.toString(), app, page);
        next('step_1_1', 'step_1_2');
    })
    .next((next, connector, app, page, step_1_1, step_1_2) => {
        console.log('2.', connector.toString(), app, page, step_1_1, step_1_2);
        next('step_2');
    })
    .next(function (next, connector, app, page, pre) {
        console.log('3.', connector.toString(), app, page, pre);
        next('step_3');
    })
    .next((next, connector, app, page, pre) => {
        console.log('4.', connector.toString(), app, page, pre);
        next('step_4');
    })
    .run('a', 'b');
