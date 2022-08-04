function Component(option) {
    console.log('init data:', option.data);
    console.log('init items:', option.items);
    return option;
}

function preset(presetOption = {}, defaultConstructor = Component) {
    return function (option = {}, constructor = defaultConstructor) {
        option.data = Object.assign({}, presetOption.data, option.data ? option.data : {});
        option.items = presetOption.items.concat(option.items ? option.items : []);
        constructor(option);
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
ComponentAB({
    data: {name: 'params.AB'},
    items: ['params.AB1', "params.AB2"]
});
ComponentAB({
    data: {name: 'params.AB'},
    items: ['params.AB1', "params.AB2"]
}, CommonComponent);
ComponentAB({
    data: {name: 'params.AB'},
    items: ['params.AB1', "params.AB2"]
}, o => {
    ComponentA(o, CommonComponent);
});
// ComponentBA();