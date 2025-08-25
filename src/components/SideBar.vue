<template>
    <div class="div-side-bar">
        <button @click="closeSideBar" class="fecha-side-bar">X</button>
        <div v-if="isAluno" class="side-bar">
            <div class="isAluno">
                <progress value="40" max="100"></progress>
                <ul>
                    <li v-for="(categoria,index) in categorias" :key="index"><button>{{categoria }}</button></li>
                </ul>
            </div>
        </div>
        
            <div v-if="isProfessor" class="side-bar">
                <div class="isProfessor"> 
                <p>Número de cursos possuídos: {{getCursos.length}}</p>
                <ul>
                    <li v-for="(curso,index) in getCursos" :key="index">{{ curso.infoBasica.nomeCurso }} - Número de inscritos: X</li>
                </ul>
                </div>
            </div>
    </div>
</template>
<script>
export default{
    name:'SideBar',
    computed: {
        isAluno() {
            return this.$store.getters.isAluno
        },
        isProfessor() {
            return this.$store.getters.isProfessor
        },
        categorias(){
            return this.$store.getters.getCategorias
        },
        cursos(){
            return this.$store.getters.getCursos
        },
        getStateSideBar(){
            return this.$store.getters.getStateSideBar
        },
        getCursos(){
            return this.$store.getters.getCursos
        }
    },
    methods:{
        closeSideBar(){
            this.$store.dispatch('showSideBar', {mostrarSideBar:false})
        }

    }
}
</script>
<style>
.div-side-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: blue    ;
  background: #333;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.3);
  z-index: 1000; /* pra ficar acima do header */
}

.side-bar ul {
  list-style: none;
  padding: 0;
}

.side-bar li {
  margin: 10px 0;
}</style>
