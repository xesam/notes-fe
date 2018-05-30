import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './Main.vue';

import Home from './Home.vue'
import Explorer from './Explorer.vue'
import Cart from './Cart.vue'
import Me from './Me.vue'
import Book from './Book.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            name: 'main',
            path: '/',
            component: Main,
            children: [
                { name: 'home', path: 'home', component: Home },
                { name: 'explorer', path: 'explorer', component: Explorer },
                { name: 'cart', path: 'cart', component: Cart },
                { name: 'me', path: 'me', component: Me }
            ]
        },
        {
            name: 'book',
            path: '/book/:id',
            component: Book
        }
    ],
});

export default router