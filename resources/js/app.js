// require('./bootstrap');

import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import VueAuth from '@websanova/vue-auth'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import NotFound from './components/NotFound.vue'
import Dashboard from './components/Dashboard.vue'

Vue.use(VueRouter)

Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                auth: false
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                auth: false
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                auth: true
            }
        },
        {
            path: '*',
            name: '404',
            component: NotFound,
            meta: {
                auth: true
            }
        }
    ]
})

Vue.router = router

Vue.use(VueAuth, {
    //configures vue-auth to use the bearer driver which basically adds the authentication token to the request header during requests and reads and parses the token from server responses.
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    // configures vue-auth to use the axios http driver, since I am using axios for http requests.
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    // configures vue-auth to use the driver for vue-router since that is what I am using.
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
})

App.router = Vue.router

new Vue(App).$mount('#app')

// new Vue({
//     el: '#app',
//     router: router,
//     render: app => app(App)
// })