<template>
    <div class="container-info-basica">
        <h2>Etapa 3: Periodo de Acesso</h2>
        <p>Configure o período de disponibilidade do curso</p>
            <div class="inputs-periodo">
                <div class="date-input">
                    <label for="data-inicio">Data de início:</label>
                    <input type="date" id="data-inicio" v-model="localDataInicio" @input="updateDataInicio">
                </div>
                <div class="date-input">
                    <label for="data-termino">Data de término:</label>
                    <input type="date" id="data-termino" v-model="localDataTermino" @input="updateDataTermino">
                </div>
            </div>
            <div class="container-resumo">
                <h3>Resumo do curso:</h3>
                <p>Nome: ...</p>
                <p>Categoria: ...</p>
                <p>Número de aulas: ...</p>
                <p>Período: ...</p>
            </div>
            </div>
</template>
<script>
export default{
    name:'PeriodoAcesso',
    props:{
        dataInicio:String,
        dataTermino:String

    },
    data(){
        return{
            localDataInicio: this.dataInicio || '',
            localDataTermino: this.dataTermino || ''
            
        }
    },
    methods:{
        getPeriodo(){
            return{
                dataInicio: this.dataInicio,
                dataTermino: this.dataTermino
            }
        },
        updateDataInicio(event){
            this.$emit('update:dataInicio',event.target.value)
        },
        updateDataTermino(event){
            this.$emit('update:dataTermino',event.target.value)
        },
      
    },
    watch: {
        localDataInicio(val) {
            this.$emit('update:dataInicio', val);
        },
        localDataTermino(val) {
            this.$emit('update:dataTermino', val);
        }
}
}</script>
<style>
.inputs-periodo{
    display: flex;
    justify-content: space-around;
}
.date-input{
    display: flex;
    flex-direction: column;
} 
.container-resumo{
   width: 80%;
  max-width: 800px;
  min-width: 300px;
  border-style: solid;
  padding: 20px;
  box-sizing: border-box;
  margin: auto;
  margin-top: 20px;
}


</style>