<template>
    <div class="headerAndSideBar">
        <header class="header-home">
            <div class="div-header-home">
                <button @click="toggleSideBar" class="btn-sideBar">|||</button>
                <img src="@/assets/generic.png" alt="Logo site de Cursos Implydemy">

                <div v-if="isAluno" class="search-area">
                    <input v-model="cursoPesquisado" type="text" placeholder="Pesquisar cursos" class="input-pesquisa">
                    <button @click="pesquisarCurso">🔍</button>
                </div>

                <button v-if="isProfessor" @click="criarCurso">Criar curso</button>

                <nav class="navClass">
                    <button @click="direcionaPerfil">Perfil</button>
                    <button @click="direcionaCursos">Cursos</button>
                </nav>
            </div>
        </header>
        <SideBar v-if="getStateSideBar"/>
    </div>

</template>
<script>
import SideBar from './SideBar.vue'


export default {
    name: 'HomeHeader',
    components:{ SideBar,
    },
    data() {
        return {
            cursoPesquisado: '',
            
        }
    },
    computed: {
        isAluno() {
            return this.$store.getters.isAluno
        },
        isProfessor() {
            return this.$store.getters.isProfessor
        },
        getStateSideBar(){
            return this.$store.getters.getStateSideBar
        }

    },
    methods: {
        direcionaPerfil() {
            this.$router.push('/perfilPage')
        },
        direcionaCursos() {
            this.$router.push('/cursosPage')
        },
        pesquisarCurso() {
            this.$store.dispatch('searchCurso', {
                cursoPesquisado: this.cursoPesquisado
            })
        },
        toggleSideBar() {
            const atual = this.getStateSideBar
            this.$store.dispatch("showSideBar", {mostrarSideBar : !atual})
            console.log("Sidebar:", this.mostrarSideBar)
        },
        criarCurso(){
            this.$router.push('/cadastro-curso')
        }


    }

}


</script>
<style>
.headerAndSideBar{
    margin-bottom: 40px;
}
.header-home{
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0px;
    right: 0;
    left: 0;
    background-color: rgb(168, 8, 8);
    z-index: 999;

}
.div-header-home{
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
}
</style>