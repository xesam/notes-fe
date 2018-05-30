import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Explorer from './Explorer.vue'
import Cart from './Cart.vue'
import Me from './Me.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { name: 'home', path: '/home', component: Home },
        { name: 'explorer', path: '/explorer', component: Explorer },
        { name: 'cart', path: '/cart', component: Cart },
        { name: 'me', path: '/me', component: Me }
    ],
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});