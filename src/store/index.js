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
        categorias: ['Culinária','Marketing','Design','Fotografia','Idiomas','Arte'],
        aulas:[{
            assuntoAula: "Introdução ao Vue",
            descricaoAula: "Vue é um framework progressivo...",
            duracaoAula: 45,
            videoAula: "https://www.youtube.com/embed/qjwjMA2SIFs?si=EjSUU4ZVrWIaLS_I",
            concluida: "Não"
        },
            {
            assuntoAula: "Introdução ao Vue",
            descricaoAula: "Vue é um framework progressivo...",
            duracaoAula: 45,
            videoAula: 'https://www.youtube.com/embed/qjwjMA2SIFs?si=EjSUU4ZVrWIaLS_I',
            concluida: 'Não'
            }    
    ],
        cursos: [],
        mostrarSideBar : false,
        slugAberta:''
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
        },
        setSlugAberta(state,slugAberta){
            state.slugAberta=slugAberta
        },
        markAulaConcluida(state, {cursoSlug, assuntoAula}){
            const curso = state.cursos.find(c =>c.slug === cursoSlug)
            if(curso){
                const aula = curso.aulas.aulasSelecionadas.find(a=> a.assuntoAula===assuntoAula)
                if(aula){
                    aula.concluida = "Sim"
                }
            }
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
        },
        saveSlugAberta({commit}, slugAberta){
            commit('setSlugAberta', slugAberta)
        },
        marcaAulaConcluida({commit}, info){
            commit('markAulaConcluida', info)
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
        },
        getSlugAberta(state){
            return state.slugAberta
        }

}})