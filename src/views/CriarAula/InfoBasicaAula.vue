<template>
    <div class="container-info-basica">
        
    <h2>Informações Básicas</h2>
    <p>Defina o assunto e conteúdo da sua aula</p>
    <BaseInput :value="assuntoAula" @input="updateAssuntoAula" id="assuntoAula" label="Assunto da Aula *" type="text" placeholder="Ex: Introdução ao React"  aria-disabled="false"/>
    <DescricaoInput :value="descricaoAula" @input="updateDescricaoAula" id="descricaoAula" label="Descrição da Aula"/>
    <BaseInput :value="duracaoAula" @input="updateDuracaoAula" id="duracaoAula" label="Duração da Aula" type="text" placeholder="Duração da aula" aria-disabled="false"/>
    </div>
</template>
<script>
import BaseInput from '@/components/BaseInput.vue';
import DescricaoInput from '@/components/DescricaoInput.vue';

export default{
    name: "InfoBasicaAula",
    components:{
        BaseInput,
        DescricaoInput
    },
    props:{
        assuntoAula:String,
        descricaoAula:String,
        duracaoAula:String
    },
    methods:{
        updateAssuntoAula(value){
            this.$emit('update:assuntoAula', value)
        },
        updateDescricaoAula(value){
            this.$emit('update:descricaoAula',value)
        },
        updateDuracaoAula(value){
            this.$emit('update:duracaoAula', value)
        }
    }
}</script>
<style></style>