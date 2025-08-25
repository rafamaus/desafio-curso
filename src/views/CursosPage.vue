<template>
    <div class="container-cursos">
        <h1>Cursos Disponíveis</h1>
        <p>Explore nossa seleção de cursos e comece a aprender hoje mesmo</p>
        <div class="card-curso" v-for="(curso,index) in getCursos" :key="index">
            <img src="" alt="Imagem do Curso">
            <div class="sub-title-card">
                <h2>{{ curso.infoBasica.nomeCurso }}</h2>
                <p>{{ curso.infoBasica.categoriaCurso }}</p>
            </div>
            <div class="sub-title-card">
                <p>{{ curso.aulas.aulasSelecionadas.length }}: aulas</p>
                <p>{{ getDuracaoTotal(curso) }}minutos</p>
            </div>
            <div class="sub-title-card">
                <p>{{ curso.alunosInscritos.length }} aluno(s)</p>
                <p>Até: {{ curso.periodo.dataTermino }}</p>
            </div>
            <div class="sub-title-card">
                <p>Período: {{ curso.periodo.dataInicio }} a {{ curso.periodo.dataTermino }}</p>
            </div>
            <div>
                <button v-if="(inscreveu===0) && isAluno" @click="alunoInscreveu(curso.infoBasica.nomeCurso)" >Increver-se</button>
                <button v-if="(inscreveu===1) && isAluno" @click="verCurso(curso.infoBasica.nomeCurso)">Ver Curso</button>
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
        }
    },
    methods: {
        getDuracaoTotal(curso) {
            let duracaoTotal = 0;
            if (!curso.aulas?.aulasSelecionadas) {
                return duracaoTotal;
            }

            for (let i = 0; i < curso.aulas.aulasSelecionadas.length; i++) {
                const aula = curso.aulas.aulasSelecionadas[i];
                duracaoTotal += (aula?.duracao || 0);
            }

            return duracaoTotal;
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
}
.card-curso{
    width: 33%;
    border-style: solid;
}
.sub-title-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>