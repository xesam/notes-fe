import {Dispatcher} from "flux";

const dispatcher = new Dispatcher();

dispatcher.register(e => {
    console.log(e);
});

dispatcher.dispatch({
    type: 0,
    payload: 'hello'
});



