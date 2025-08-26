<template>
    <div>
        <div class="exibe-aulas">
            <h2 class="h1-title">Aulas do Curso</h2>
            <p class="paragraph-red">Clique em uma aula para visualizar o conteúdo</p>
            <div class="div-sub-container" v-if="curso">
                <div class="div-for-aulas">
                    <div class="input-group-aula">
                        <button class="input-aula" v-for="(aula,i) in curso.aulas.aulasSelecionadas" :key="i" @click="videoAulaTela(aula.assuntoAula)">
                            <h4>*{{aula.assuntoAula}}</h4>
                            <p>{{aula.duracaoAula}} minutos</p>
                            <p v-if="aula.concluida==='Sim'"> Concluida </p>
                        </button>
                    </div>
                </div>
                <div class="div-for-video">
                    <h4>{{ tituloAula }}</h4>
                    <iframe class="i-frame" width="90%" height="315" :src="videoNaTela" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <button @click="concluirAula" class="btn-acoes" >Marcar como concluída</button>
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
                videoNaTela:'',
                isConcluida:false
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
                this.isConcluida=true
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
.input-grop-aula{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin: auto;
    padding: 10px;
}
@media(max-width:877){
    .input-aula{
        height: 120px;
    }
}
.div-sub-container{
    display: flex;
    justify-content: space-between;
    
}
.div-for-aulas{
    border-style: solid;
    width: 40%;
    background-color: rgba(255, 0, 0, 0.214);
     border-color: rgb(216, 72, 72);
    box-shadow: inset 0 0 10px rgb(238, 130, 130);
    border-radius: 16px;
}
.div-for-video{
    width: 50%;
    border-style: solid;
     border-color: violet;
    box-shadow: inset 0 0 10px violet;
    background-color: rgb(255, 226, 255);
}
.i-frame{
    border-radius: 4px;
    border-style: solid;
    border-width: 8px;
    border-color: violet;
}
</style>