import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Login from './components/Login'

Vue.use(VueRouter)

Vue.use(VueAxios, axios)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})

new Vue({
    el: '#app',
    router: router,
    render: app => app(App)
})