import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins:[createPersistedState()],
    state:{
        email:'',
        password:'',
        userRole:'',
        cursoPesquisado: '',
        categorias: ['marketing','design','fotografia','idiomas','arte'],
        cursos: ['java','php']
    },
    mutations:{
        setEmail(state, email){
            state.email = email
        },
        setPassword(state,password){
            state.password = password
        },
        setUserRole(state, userRole){
            state.userRole = userRole
        },
        setCursoPesquisado(state, cursoPesquisado){
            state.cursoPesquisado = cursoPesquisado
        },
        setListaDeCursos(state, cursos){
            state.cursos = cursos
        }
    },
    actions:{
        saveLoginData({commit}, {email, password, userRole}){
            commit('setEmail', email)
            commit('setPassword', password)
            commit('setUserRole', userRole)
        },
        searchCurso({commit}, {cursoPesquisado}){
            commit('setCursoPesquisado', cursoPesquisado)
        },
        saveCursos({commit},{cursos}){
            commit('setListaDeCursos',cursos)
        }
    },
    getters :{
        getUserData(state){
            return{
                email: state.email,
                password: state.password,
                userRole: state.userRole
            }
        },
        getCursoPesquisado(state){
            return{
                cursoPesquisado: state.cursoPesquisado
            }
        },
        isAluno(state){
            return state.userRole === 'aluno'
        },
        isProfessor(state){
            return state.userRole === 'professor'
        },
        getCategorias(state){
            return state.categorias
        },
        getCursos(state){
            return state.cursos
        }






}})