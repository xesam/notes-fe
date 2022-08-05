const assert = require('assert');

function Component(option) {
    return option;
}

function preset(presetOption = {}, defaultConstructor = Component) {
    return function (option = {}, constructor = defaultConstructor) {
        option.data = Object.assign({}, presetOption.data, option.data ? option.data : {});
        option.items = presetOption.items.concat(option.items ? option.items : []);
        return constructor(option);
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
}, ComponentA);

const ComponentBA = preset({
    data: {name: 'BA'},
    items: ['BA1', "BA2"]
}, ComponentB);

// ComponentA();
// ComponentB();
const optionAB = ComponentAB({
    data: {name: 'params.AB'},
    items: ['params.AB1', "params.AB2"]
});

assert.deepEqual(
    ComponentAB({
        data: {name: 'params.AB'},
        items: ['params.AB1', "params.AB2"]
    }),
    {
        data: {name: 'params.AB'},
        items: ['A1', "A2", 'AB1', "AB2", 'params.AB1', "params.AB2"]
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
// ComponentBA();