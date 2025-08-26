<template>
    <div class="container-home-global">    
        <h1 class="h1-title">Bem vindo, {{ user.userRole }}! 👋</h1>
        <div v-if="isProfessor" class="container-welcome">
            <h2 class="h2-title">Como começar?</h2> 
            <p v-if="getCursos.length===0" class="paragraph">Você ainda não cadastrou nenhum curso, comece agora!!</p>
            <p v-else class="paragraph">Aqui você pode criar, gerenciar e acompanhar seus cursos. </p>
            <div class="botoes-professor">
                <button class="btn-acoes">Crie Cursos 📝</button>
                <button class="btn-acoes">Acompanhe Progresso 📲</button>
                <button class="btn-acoes">Gerencie Alunos 🧑‍🎓</button>
            </div>
            <button @click="criarCurso" class="btn-criar-curso-welcome">Clique aqui para criar um curso!</button>
        </div>
        <div v-if="isAluno" class="container-welcome">
            <h2>Explore nossos cursos!</h2>
            <p v-if="getCursos.length===0">Você ainda não possui cursos disponíveis para se inscrver</p>
            <p v-else>Descubra uma variedade de cursos criados por nossos professores especializados. Navegue pelas categorias e encontre o curso perfeito para você.</p>
            <div class="botoes-professor">
                <button class="btn-acoes">Tecnologia</button>
                <button class="btn-acoes">Negócios</button>
            </div>
            <button @click="explorarCursos" class="btn-criar-curso-welcome">Explorar Cursos!</button>
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
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=M+PLUS+Rounded+1c&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Archivo+Black&family=Bagel+Fat+One&family=Federant&display=swap');
.container-home-global{
    border-style: solid;
    border-color: red;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 70%;
    margin: auto;
    background-color: rgba(255, 226, 249, 0.547);
}
.h1-title{
    color: rgb(241, 42, 42);
    font-family: "Black Ops One", system-ui;
    font-weight: 400;
    font-style: normal;
    text-shadow: 0 0 3px rgb(151, 4, 78), 0 0 5px #f96fe7;
}
.container-welcome{
    width: 80%;
    max-width: 800px;
    min-width: 300px;
    border-style: solid;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border-color: rgb(246, 146, 224);
    border-radius: 4px;
    background-color:rgba(220, 122, 171, 0.484) ;
    border-color: violet;
    box-shadow: inset 0 0 10px violet;
}
.h2-title{
    font-family: "Archivo Black", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 22px;
    color: rgb(255, 242, 250);
}
.paragraph{
    font-style: normal;
    font-size: 14px;
    color: rgb(255, 242, 250);
    border-style: solid;
    border-radius: 4px;
    border-width: 2px;
    padding-top: 4px;
    padding-bottom: 4px;

}
.botoes-professor{
    display: flex;
    justify-content: space-around;
}
.btn-acoes{
    border-radius: 4px;
    background-color:rgba(177, 3, 29, 0.484) ;
    border-color: rgb(240, 55, 18);
    box-shadow: inset 0 0 10px violet;
    color:rgb(255, 242, 250) ;
}
.btn-criar-curso-welcome{
    border-radius: 8px;
    border-width: 4px;
    background-color:rgba(231, 7, 7, 0.975) ;
    border-color: rgb(247, 82, 82);
    box-shadow: inset 0 0 10px violet;
    padding: 8px;
    margin-top: 40px;
    cursor: pointer;
    transition: 0.3s;
    color:rgb(255, 242, 250) ;
}
.btn-criar-curso-welcome:hover{
    transform: scale(1.1);
    background-color:rgb(223, 20, 20) ;
}
</style>