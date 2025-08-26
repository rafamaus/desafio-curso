<template>
    <div class="container-info-basica">
        <h2>Etapa 3: Periodo de Acesso</h2>
        <p>Configure o período de disponibilidade do curso</p>
            <div class="inputs-periodo">
                <div class="date-input">
                    <label for="data-inicio">Data de início:</label>
                    <input type="date" id="data-inicio" v-model="localDataInicio" @input="updateDataInicio" class="btn-acoes">
                </div>
                <div class="date-input">
                    <label for="data-termino">Data de término:</label>
                    <input type="date" id="data-termino" v-model="localDataTermino" @input="updateDataTermino" class="btn-acoes">
                </div>
            </div>
            <div class="container-resumo">
                <h3 class="h2-title">Resumo do curso:</h3>
                <p>Nome: {{truncarTexto(nomeCurso, 25)}}</p>
                <p>Categoria: {{categoriaCurso}}</p>
                <p>Número de aulas: {{numeroAulas}}</p>
                
            </div>
            </div>
</template>
<script>
export default{
    name:'PeriodoAcesso',
    props:{
        dataInicio: String,
        dataTermino: String,
        nomeCurso: String,
        categoriaCurso: String,
        numeroAulas: Number

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
        truncarTexto(texto, limite) {
            if (!texto) return '';
            return texto.length > limite ? texto.slice(0, limite) + '...' : texto;
        }
      
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
  border-color: violet;
    box-shadow: inset 0 0 10px violet;
    background-color: rgba(90, 6, 90, 0.607);
}


</style>