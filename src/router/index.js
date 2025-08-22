import Vue from 'vue'
import Router from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import HomeConditional from '@/views/HomeConditional.vue'
import PerfilPage from '@/views/PerfilPage.vue'
import CursosPage from '@/views/CursosPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: LoginView},
        {path: '/homeAluno', component: HomeConditional},
        {path: '/perfilPage', component: PerfilPage},
        {path: '/cursosPage', component: CursosPage}
    ]
})