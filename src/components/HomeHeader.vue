<template>
    <header class="header-home">
        <div class="div-header-home">
            <button @click="abrirSideBar" class="btn-sideBar">|||</button>
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

</template>
<script>
export default {
    name: 'HomeHeader',
    data() {
        return {
            cursoPesquisado: ''
        }
    },
    computed: {
        isAluno() {
            return this.$store.getters.isAluno
        },
        isProfessor() {
            return this.$store.getters.isProfessor
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
        abrirSideBar() {
            return
        }

    }

}


</script>
<style>
.header-home{
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0px;
    right: 0;
    left: 0;
    background-color: rgb(168, 8, 8);

}
.div-header-home{
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
}
</style>