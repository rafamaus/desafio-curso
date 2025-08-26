<template>
    <div class="div-side-bar">
        <button @click="closeSideBar" class="btn-close">❌</button>
        <div v-if="isAluno" class="side-bar">
            <div class="isAluno">
                <progress :value="aulasTotaisConcluidas" :max="aulasTotaisAluno" class="progress-bar"></progress>
                <p class="paragraph-red">Progresso: {{ progressoTotal}} %</p>
                <ul class="ul-class">
                    <li v-for="(categoria, index) in categorias" :key="index"><button @click="categoriaSlug(categoria)" class="btn-categorias">{{ categoria }}</button></li>
                </ul>
            </div>
        </div>

        <div v-if="isProfessor" class="side-bar">
            <div class="isProfessor">
                <p class="paragraph-red">Número de cursos possuídos: {{ getCursos.length }}</p>
                <ul>
                    <li class="btn-categorias2" v-for="(curso, index) in getCursos" :key="index">{{ truncarTexto(curso.infoBasica.nomeCurso,15) }} - Número de
                        inscritos: {{ curso.alunosInscritos.length }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SideBar',
    data() {
        return {
            cursosTotaisAluno: 0,
            aulasTotaisAluno: 0,
            aulasTotaisConcluidas: 0,
            progressoTotal: 0
        }
    },
    computed: {
        isAluno() {
            return this.$store.getters.isAluno
        },
        isProfessor() {
            return this.$store.getters.isProfessor
        },
        categorias() {
            return this.$store.getters.getCategorias
        },
        cursos() {
            return this.$store.getters.getCursos
        },
        getStateSideBar() {
            return this.$store.getters.getStateSideBar
        },
        getCursos() {
            return this.$store.getters.getCursos
        },
        getUserData() {
            return this.$store.getters.getUserData
        },
    },
    methods: {
        closeSideBar() {
            this.$store.dispatch('showSideBar', { mostrarSideBar: false })
        },
        cursosAluno() {
            for (let curso of this.getCursos) {
                if (curso.alunosInscritos.includes(this.getUserData.email)) {
                    const aulas = curso.aulas.aulasSelecionadas || []
                    this.aulasTotaisAluno += aulas.length

                    for (let aula of aulas) {
                        if (aula.concluida === "Sim") {
                            this.aulasTotaisConcluidas++
                        }
                    }
                }
            }
            this.progressoTotal= (this.aulasTotaisConcluidas*100)/this.aulasTotaisAluno

        },
        calculaProgresso() {
            let progresso = this.aulasTotaisAluno / this.aulasTotaisConcluidas
            return progresso
        },
        categoriaSlug(categoria){
            const curso = this.getCursos.find(c => c.infoBasica.categoriaCurso === categoria);
            if (!curso) return;
            const slug = curso.slugCategoria;

            this.$store.dispatch('saveSlugAberta', slug)
            this.$router.push(`/cursosPage/${slug}`);
        },
        truncarTexto(texto, limite) {
            if (!texto) return '';
            return texto.length > limite ? texto.slice(0, limite) + '...' : texto;
        }

    },
    mounted() {
        if (this.isAluno) this.cursosAluno()
    }
}
</script>
<style>
.div-side-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background-image: linear-gradient(to top, red, violet);

    color: white;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    
}

.side-bar ul {
    list-style: none;
    padding: 0;
}
.progress-bar{
    margin-top: 20px;
    color: rgb(255, 0, 0);
    background-color: rgb(255, 0, 0);
}
.progress-bar::-webkit-progress-bar {
  background-color: #ffffff;
}
.progress-bar::-webkit-progress-value {
  background-color: rgb(230, 9, 9); 
}
.side-bar li {
    margin: 10px 0;
}
.btn-close{
    background-color:  violet;
    border-radius: 100%;
    border-style: none;
    cursor: pointer;
}
.btn-categorias{
    border-radius: 4px;
    background-color:rgba(177, 3, 29, 0.484) ;
    border-color: rgb(240, 55, 18);
    box-shadow: inset 0 0 10px violet;
    color:rgb(255, 242, 250) ;
    width: 90%;
}
.btn-categorias2{
    border-radius: 4px;
    background-color:rgba(177, 3, 29, 0.484) ;
    border-color: rgba(86, 14, 0, 0.573);
    box-shadow: inset 0 0 10px violet;
    color:rgb(255, 242, 250) ;
    width: 90%;
    border-style: solid;
    

}
.ul-class{
    border-style: solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    border-color: rgb(240, 55, 18);
    box-shadow: inset 0 0 10px violet;
    background-color: rgb(244, 227, 244);
}
.paragraph-red{
    font-style: normal;
    font-size: 14px;
    color: rgb(255, 0, 0);
    border-style: solid;
    border-radius: 4px;
    border-width: 2px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-color: red;
}
</style>