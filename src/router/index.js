import Vue from 'vue'
import Router from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import HomeConditional from '@/views/HomeConditional.vue'
import PerfilPage from '@/views/PerfilPage.vue'
import CursosPage from '@/views/CursosPage.vue'
import CadastroCurso from '@/views/CadastrarCurso/CadastroCurso.vue'
import NovaAula from '@/views/CriarAula/NovaAula.vue'
import CursoDetalhe from '@/views/CursoDetalhe.vue'

import store from '@/store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {path: '/', component: LoginView},
        {path: '/homeAluno', component: HomeConditional},
        {path: '/perfilPage', component: PerfilPage},
        {path: '/cursosPage', component: CursosPage},
        {path: '/cadastro-curso', component: CadastroCurso},
        {path: '/nova-aula', component: NovaAula},
        {path: '/curso/:slug', component: CursoDetalhe}
    ]
})
router.beforeEach((to, from, next) => {
    const userAthenticated = !!store.state.email && !!store.state.password && !!store.state.userRole

    if (to.path !== '/' && !userAthenticated) {
        next('/')
    } else {
        next()
    }
})
export default router