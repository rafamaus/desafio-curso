import Vue from 'vue'
import Router from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import HomeAluno from '@/views/HomeAluno.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: LoginView},
        {path: '/homeAluno', component: HomeAluno},
        
    ]
})