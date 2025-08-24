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
        categorias: ['futebol','marketing','design','fotografia','idiomas','arte'],
        aulas:[{
            assunto: "Introdução ao Vue",
            conteudo: "Vue é um framework progressivo...",
            video: File,
            duracao: 45
        },
            {
            assunto: "Introdução ao Vue3",
            conteudo: "Vue é um framework progressivo...",
            video: File,
            duracao: 45
            }    
    ],
        cursos: [],
        mostrarSideBar : false
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
        },
        setDisplaySideBar(state, mostrarSideBar){
            state.mostrarSideBar = mostrarSideBar
        },
        setAulas(state, aula){
            state.aulas.push(aula)
        },
        addCurso(state,curso){
            state.cursos.push(curso)
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
        saveCurso({commit},curso){
            commit('addCurso',curso)
        },
        showSideBar({commit}, {mostrarSideBar}){
            commit('setDisplaySideBar', mostrarSideBar)
        },
        saveAula({commit}, aula){
            commit('setAulas', aula)
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
        },
        getStateSideBar(state){
            return state.mostrarSideBar
        },
        getAulas(state){
            return state.aulas
        }

}})