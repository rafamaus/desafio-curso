<template>
    <div class="container-info-basica">
        <h2>Etapa 2: Vínculo com aulas</h2>
        <div class="sub-title">
            <p>Selecione as aulas que farão parte do curso</p>
            <button @click="criarAula" class="btn-criar-curso">Criar Aulas 📽️</button>
        </div>
        <div v-for="(aula,index) in getAulas" :key="index" class="input-group">
            <div class="input-aula-only">
                <input type="checkbox" :id="index" :value="aula" @change="handleInput(aula)" />
                <div class="aula-conteudo">
                    <label :for="index">{{ aula.assuntoAula }}</label>
                    <p>Duração: {{ aula.duracaoAula }} min</p>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default{
    name:'VinculoAulas',
    props:{
        aulasSelecionadas:Array

    },
    data(){
        return{
            aulasChecadas:[]
        }
    },
    methods:{
        criarAula(){
            this.$router.push('/nova-aula')
        },
        getAulasSelecionadas(){
            return{
                aulas:this.aulasSelecionadas
            }
        },
        handleInput(aula){
            this.aulasChecadas.push(aula)
            this.$emit("update:aulasSelecionadas", this.aulasChecadas)
            
        },
 
    },
    computed:{
        getAulas(){
            return this.$store.getters.getAulas
        }
    },  
  
}
</script>
<style>
.sub-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.input-aula-only {
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
}
.input-aula-only p{
    font-size: 12px;
}
</style>