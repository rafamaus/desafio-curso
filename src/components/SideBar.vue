<template>
    <div class="div-side-bar">
        <button @click="closeSideBar" class="fecha-side-bar">X</button>
        <div v-if="isAluno" class="side-bar">
            <div class="isAluno">
                <progress :value="aulasTotaisConcluidas" :max="aulasTotaisAluno"></progress>
                <p>Progresso: {{ progressoTotal}} %</p>
                <ul>
                    <li v-for="(categoria, index) in categorias" :key="index"><button @click="categoriaSlug(categoria)">{{ categoria }}</button></li>
                </ul>
            </div>
        </div>

        <div v-if="isProfessor" class="side-bar">
            <div class="isProfessor">
                <p>Número de cursos possuídos: {{ getCursos.length }}</p>
                <ul>
                    <li v-for="(curso, index) in getCursos" :key="index">{{ curso.infoBasica.nomeCurso }} - Número de
                        inscritos: X</li>
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
    width: 250px;
    height: 100%;
    background-color: blue;
    background: #333;
    color: white;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    /* pra ficar acima do header */
}

.side-bar ul {
    list-style: none;
    padding: 0;
}

.side-bar li {
    margin: 10px 0;
}
</style>