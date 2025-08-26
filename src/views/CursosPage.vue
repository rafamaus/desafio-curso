<template>
    <div class="container-cursos">
        <h1 v-if="slugCategoria">Cursos da categoria : {{slugCategoria}}</h1>
        <h1 v-else class="h1-title">Cursos Disponíveis</h1>
        <p>Explore nossa seleção de cursos e comece a aprender hoje mesmo</p>
        <div class="div-cards">
        <div class="card-curso" v-for="(curso,index) in cursosFiltrados" :key="index">
            <img :src="curso.infoBasica.imagemCurso" alt="Imagem do Curso" style="width: 50%;">
            <div class="sub-title-card">
                <h2 class="h2-title">{{ curso.infoBasica.nomeCurso }}</h2>
                <p >{{ curso.infoBasica.categoriaCurso }}</p>
            </div>
            <div class="sub-title-card">
                <p>Aulas: {{ curso.aulas.aulasSelecionadas.length }}</p>
                <p>{{ getDuracaoTotal(curso) }} minutos</p>
            </div>
            <div class="sub-title-card">
                <p>{{ curso.alunosInscritos.length }} aluno(s)</p>
                <p>Até: {{ curso.periodo.dataTermino }}</p>
            </div>
            <div class="sub-title-card">
                <p>Período: {{ curso.periodo.dataInicio }} a {{ curso.periodo.dataTermino }}</p>
            </div>
            <div>
                <button v-if="(inscreveu===0) && isAluno" @click="alunoInscreveu(curso.infoBasica.nomeCurso)" class="btn-acoes" >Increver-se</button>
                <button v-if="(inscreveu===1) && isAluno" @click="verCurso(curso.infoBasica.nomeCurso)" class="btn-acoes">Ver Curso</button>
            </div>
            </div>


        </div>
    </div>

</template>
<script>
export default {
    name: 'CursosPage',
    data(){
        return{
            inscreveu:0
        }
    },
    computed: {
        getCursos() {
            return this.$store.getters.getCursos
        },
        isAluno(){
            return this.$store.getters.isAluno
        },
        getAlunoEmail(){
            return this.$store.getters.getUserData.email
        },
        slugCategoria(){
            return this.$route.params.slug
        },
        cursosFiltrados(){
            if(!this.slugCategoria){
                return this.getCursos
            }
            return this.getCursos.filter(curso =>curso.slugCategoria ===this.slugCategoria)
        }
    },
    methods: {
        getDuracaoTotal(curso) {
            let duracaoTotal =0
            for(let i =0; i<curso.aulas.aulasSelecionadas.length;i++){
                const aula = curso.aulas.aulasSelecionadas[i]
                
                duracaoTotal += parseInt(aula.duracaoAula)
                
            }
            return duracaoTotal
        },
        alunoInscreveu(cursoClicado){
            const novoAluno= this.getAlunoEmail
            const cursosAtualizados = this.getCursos.map(curso=>{
                if(curso.infoBasica.nomeCurso===cursoClicado){
                    const jaInscrito = curso.alunosInscritos?.includes(novoAluno);
                    if(!jaInscrito){
                        return{
                        ...curso,
                        alunosInscritos:[...(curso.alunosInscritos || []), novoAluno]
                    }

                    }

                    
                }
                return curso;
            })
            this.$store.commit('setListaDeCursos', cursosAtualizados)
            alert('aluno inscrito com sucesso')
            this.inscreveu = 1
        },
        verCurso(nomeCurso){
            const curso = this.getCursos.find(c => c.infoBasica.nomeCurso === nomeCurso);
            if (!curso) return;

            

            const slug = curso.slug;

            this.$store.dispatch('saveSlugAberta', slug)
            this.$router.push(`/curso/${slug}`);
        }
    }
}
</script>
<style>
.container-cursos{
    width: 100%;
    min-width: 300px;
    border-style: solid;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(255, 226, 249, 0.547);
    border-color: red;
    border-radius: 4px;
    flex-wrap: wrap;
}
.div-cards{
    display: flex;
    gap: 10px;
    justify-content: space-between;
    
}
.card-curso{
    width: 50%;
    border-style: solid;
    padding: 20px;
  box-sizing: border-box;
  border-color: rgb(246, 146, 224);
    border-radius: 4px;
    background-color:rgba(220, 122, 171, 0.484) ;
    border-color: violet;
    box-shadow: inset 0 0 10px violet;
    flex-wrap: wrap;
}
@media(max-width:555px){
    .div-cards{
        display: block;
    
    }
    .card-curso{
        width: 100%;
        margin-bottom: 10px;
    }
}
.sub-title-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-style: solid;
    border-color: violet;
    margin-bottom: 5px;
    color: white;
    text-shadow: 0 0 3px rgb(151, 4, 78), 0 0 5px #FF0000;
     box-shadow: inset 0 0 10px violet;
     border-radius: 8px;
     flex-wrap: wrap;
    
}
</style>