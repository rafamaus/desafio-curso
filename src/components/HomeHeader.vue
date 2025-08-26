<template>
    <div class="headerAndSideBar">
        <header class="header-home">
            <div class="div-header-home">
                <button @click="toggleSideBar" class="btn-sideBar"><svg fill="currentColor" class="svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button>
                <button @click="vaiParaHome" class="btn-logo"><img src="@/assets/generic.png" alt="Logo site de Cursos Implydemy" class="logo"></button>
               

                <div v-if="isAluno" class="search-area">
                    <input v-model="cursoPesquisado" type="text" placeholder="Pesquisar cursos" class="btn-pesquisar">
                    <button @click="pesquisarCurso" class="btn-pesquisar">🔍</button>
                </div>

                <button v-if="isProfessor" @click="criarCurso" class="btn-criar-curso">Criar curso  ➕</button>
                 <button @click="criarAula" class="btn-criar-curso">Criar Aulas</button>

                <nav class="navClass">
                    <button @click="direcionaPerfil" class="btn-navClass">Perfil</button>
                    <button @click="direcionaCursos" class="btn-navClass">Cursos</button>
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
        vaiParaHome(){
            this.$router.push('/home')
        },
        criarAula(){
            this.$router.push('/nova-aula')
        },
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
.btn-logo{
    background-color:rgb(168, 8, 8) ;
    border-style: none;
    cursor: pointer;
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
    border: 2px solid  rgb(115, 0, 0);
    border-radius: 2px;
    box-shadow: 0 4px 6px rgba(255, 1, 1, 0.778);
    height: auto;
}
.div-header-home{
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    
    
}
@media(max-width:390px) {
.div-header-home {
    flex-direction: column;
    align-items: stretch;
  }

    .btn-criar-curso,
    .search-area,
    .navClass {
    width: 100%;
    }
    .btn-pesquisar {
    width: 100%;
    margin: 4px 0;
    }
      .navClass {
    flex-direction: row;
    justify-content: space-between;
  }
    
    
}
.logo{
    border-style: groove;
    border-color: rgb(197, 7, 102);
    padding: 6px;
    border-radius: 50%;
    background-color: rgb(196, 6, 101);
    box-shadow: 2px 2px 4px black;
}
.btn-criar-curso{
    height: 120%;
    width: 15%;
    border-radius: 4px;
    border-style: initial;
    background-color:rgb(197, 4, 101) ;
    transition: transform 0.3s;
    border-color: rgb(251, 174, 251);
    box-shadow: inset 0 0 10px rgb(243, 182, 243);
    cursor: pointer;
    color:rgb(251, 251, 251) ;
    font-weight:bold;
}
.btn-criar-curso:hover{
    transform: scale(1.1);
    background-color:rgb(223, 20, 20) ;
}
.navClass{
    display: flex;
    flex-direction: column;
    gap: 6px;
    
}
.btn-navClass{
    margin-right: 10px;
    border-radius: 4px;
    border-style: initial;
    background-color:rgb(151, 4, 78) ;
    transition: transform 0.3s;
    border-color: violet;
    box-shadow: inset 0 0 10px violet;
    cursor: pointer;    
    color:rgb(251, 251, 251) ;
    padding: 4px;
}
.btn-pesquisar{
    margin-right: 10px;
    border-radius: 4px;
    border-style: solid;
    background-color:rgb(106, 34, 34) ;
    transition: transform 0.3s;
    border-color: rgb(242, 0, 0);
    box-shadow: inset 0 0 10px rgb(252, 234, 252);
    cursor: pointer;    
    color:rgb(251, 251, 251) ;
    padding: 4px;
}
.btn-sideBar{
    background-color: rgb(168, 8, 8);
    border-style: none;
    border-radius: 50%;
    cursor: pointer;
}
.svg{
    color: violet;
}
</style>