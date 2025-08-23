<template>
    <h1>Etapa 1: Informações Básicas</h1>
    <p>Defina as informações básicas do seu curso</p>
    <BaseInput id="nomeCurso" label="Nome Curso" type="text" placeholder="Ex: Desenvolvimento Web Completo" v-model="nomeCurso"/>
    



</template>
<script>
import BaseInput from '@/components/BaseInput.vue';
export default{
    name:'InfoBasica',
    components:{
        BaseInput,

    },
    date(){
        return{
            nomeCurso:''
        }
    }
}

</script>
<style></style>