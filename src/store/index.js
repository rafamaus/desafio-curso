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
        }
    },
    actions:{
        saveLoginData({commit}, {email, password, userRole}){
            commit('setEmail', email)
            commit('setPassword', password)
            commit('setUserRole', userRole)
        }
    },
    getters :{
        getUserData(state){
            return{
                email: state.email,
                password: state.password,
                userRole: state.userRole
            }
        }
    }





})