<template>
    <div class="container-home-global">    
        <h1>Bem vindo, {{ user.userRole }}!</h1>
        <div v-if="isProfessor" class="container-welcome">
            <h2>Como começar?</h2> 
            <p v-if="getCursos.length===0">Você ainda não cadastrou nenhum curso, comece agora!!</p>
            <p v-else>Aqui você pode criar, gerenciar e acompanhar seus cursos. </p>
            <div class="botoes-professor">
                <button>+ Crie Cursos</button>
                <button>* Gerencie Alunos</button>
                <button>/ Acompanhe Progresso</button>
            </div>
            <button @click="criarCurso">Clique aqui para criar um curso!</button>
        </div>
        <div v-if="isAluno" class="container-welcome">
            <h2>Explore nossos cursos!</h2>
            <p v-if="getCursos.length===0">Você ainda não possui cursos disponíveis para se inscrver</p>
            <p v-else>Descubra uma variedade de cursos criados por nossos professores especializados. Navegue pelas categorias e encontre o curso perfeito para você.</p>
            <div class="botoes-professor">
                <button>Tecnologia</button>
                <button>Negócios</button>
            </div>
            <button @click="explorarCursos">Explorar Cursos!</button>
        </div>
    </div>

</template>
    

<script>

export default{
    name: 'HomeConditional',
    components: {
        
      
    },
    data(){
        return{

        }
    },
    methods:{
        criarCurso(){
            this.$router.push('/cadastro-curso')
        },
        explorarCursos(){
            this.$router.push('/cursosPage')
        }
    },
    computed:{
        isAluno() {
            return this.$store.getters.isAluno
        },
        isProfessor() {
            return this.$store.getters.isProfessor
        },
        user(){
            return this.$store.getters.getUserData
        },
        getCursos(){
            return this.$store.getters.getCursos
        }

    }
}
</script>


<style>
.container-home-global{
    border-style: solid;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 70%;
    width: 70%;
    margin: auto;
}
.container-welcome{
      width: 80%;
  max-width: 800px;
  min-width: 300px;
  border-style: solid;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.botoes-professor{
    display: flex;
    justify-content: space-around;
}
</style>