<template>
    <div>
        <div class="exibe-aulas">
            <h2>Aulas do Curso</h2>
            <p>Clique em uma aula para visualizar o conteúdo</p>
            <div class="div-sub-container" v-if="curso">
                <div class="div-for-aulas">
                    <div class="input-group">
                        <button class="input-aula" v-for="(aula,i) in curso.aulas.aulasSelecionadas" :key="i" @click="videoAulaTela(aula.assuntoAula)">
                            <h4>*{{aula.assuntoAula}}</h4>
                            <p>{{aula.duracaoAula}} minutos</p>
                        </button>
                    </div>
                </div>
                <div class="div-for-video">
                    <h4>{{ tituloAula }}</h4>
                    <iframe width="100%" height="315" :src="videoNaTela" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <button @click="concluirAula">Marcar como concluída</button>
                </div>
            </div>
        </div>
        <div class="exibe-video">


        </div>


    </div>

</template>
<script>
    export default{
        name:'CursoDetalhe',
        data(){
            return{
                tituloAula: '',
                videoNaTela:''
            }
        },
        computed:{
            getCursos() {
                return this.$store.getters.getCursos
            },
            getSlugAberta(){
                return this.$store.getters.getSlugAberta
            },
            getAulas(){
            return this.$store.getters.getAulas
            },
            curso(){
                return this.getCursos.find(curso=> curso.slug === this.getSlugAberta)
            }
        
        },
        methods:{
            descobreCurso(){
                const slugCursos = this.getCursos.slug
                for(let i =0;i<slugCursos.length;i++){
                    if(slugCursos[i]===this.getSlugAberta){
                        return 0
                    }
                }
            },
            videoAulaTela(tituloAula){
                this.tituloAula = tituloAula
                
                const aula = this.curso.aulas.aulasSelecionadas.find(
                    aula=> aula.assuntoAula===tituloAula)   
                    
                if(aula) this.videoNaTela =aula.videoAula
            },
            concluirAula(){
                this.$store.dispatch("marcaAulaConcluida",{
                    cursoSlug : this.getSlugAberta,
                    assuntoAula: this.tituloAula
                })
                alert('aula concluída')
            }

    },
    mounted(){
        this.tituloAula= this.curso.aulas.aulasSelecionadas[0].assuntoAula
        this.videoNaTela= this.curso.aulas.aulasSelecionadas[0].videoAula
    }
}
</script>
<style>
.input-aula{
    border: solid;
    border-color: rgb(151, 4, 78);
    border-radius: 8px;
    height: 60px;
    border-width: 2px;
    width: 100%;
    justify-content: center;
    margin: auto;
    background-color: rgb(255, 255, 255);
    font-family: "Black Ops One", system-ui;
    font-weight: 400;
    font-style: normal;
    box-shadow: 5px 5px 10px rgba(194, 61, 61, 0.3);
    display: flex;
    justify-content: start;
    align-items: center;
    gap:20px;
}
.div-sub-container{
    display: flex;
    justify-content: space-between;
    
}
.div-for-aulas{
    border-style: solid;
    width: 40%;
}
.div-for-video{
    width: 50%;
    border-style: solid;
}
</style>