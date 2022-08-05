const assert = require('assert');

function Constructor(option) {
    return option;
}

function preset(presetOption = {}, ...defaultConstructors) {
    return function $(option = {}, ...applyConstructors) {
        // merge
        option.data = Object.assign({}, presetOption.data, option.data ? option.data : {});
        option.items = presetOption.items.concat(option.items ? option.items : []);
        if (applyConstructors.length) {
            const constructor = applyConstructors.shift();
            return constructor(option, ...applyConstructors);
        } else if (defaultConstructors.length) {
            const constructor = defaultConstructors.shift();
            return constructor(option, ...defaultConstructors);
        } else {
            return Constructor(option);
        }
    }
}

const CommonComponent = preset({
    data: {name: 'Common'},
    items: ['Common1', "Common2"]
});

const ComponentA = preset({
    data: {name: 'A'},
    items: ['A1', "A2"]
});

const ComponentB = preset({
    data: {name: 'B'},
    items: ['B1', "B2"]
});

const ComponentAB = preset({
    data: {name: 'AB'},
    items: ['AB1', "AB2"]
}, ComponentA, ComponentB);

assert.deepEqual(
    ComponentA({
        data: {name: 'params.A'},
        items: ['params.A1', "params.A2"]
    }),
    {
        data: {name: 'params.A'},
        items: ['A1', "A2", 'params.A1', "params.A2"]
    }
)

assert.deepEqual(
    ComponentAB({
        data: {name: 'params.AB'},
        items: ['params.AB1', "params.AB2"]
    }),
    {
        data: {name: 'params.AB'},
        items: ['B1', "B2", 'A1', "A2", 'AB1', "AB2", 'params.AB1', "params.AB2"]
    }
)

assert.deepEqual(
    ComponentAB({
        data: {name: 'params.AB'},
        items: ['params.AB1', "params.AB2"]
    }, CommonComponent),
    {
        data: {name: 'params.AB'},
        items: ['Common1', "Common2", 'AB1', "AB2", 'params.AB1', "params.AB2"]
    }
)

assert.deepEqual(
    ComponentAB({
        data: {name: 'params.AB'},
        items: ['params.AB1', "params.AB2"]
    }, o => {
        return ComponentA(o, CommonComponent);
    }),
    {
        data: {name: 'params.AB'},
        items: ['Common1', "Common2", 'A1', "A2", 'AB1', "AB2", 'params.AB1', "params.AB2"]
    }
)

assert.deepEqual(
    ComponentAB({
        data: {name: 'params.AB'},
        items: ['params.AB1', "params.AB2"]
    }, ComponentA, CommonComponent),
    {
        data: {name: 'params.AB'},
        items: ['Common1', "Common2", 'A1', "A2", 'AB1', "AB2", 'params.AB1', "params.AB2"]
    }
)

assert.deepEqual(
    ComponentAB({
        data: {name: 'params.AB'},
        items: ['params.AB1', "params.AB2"]
    }, ComponentB, CommonComponent),
    {
        data: {name: 'params.AB'},
        items: ['Common1', "Common2", 'B1', "B2", 'AB1', "AB2", 'params.AB1', "params.AB2"]
    }
)
