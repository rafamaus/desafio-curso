<template>
    <div class="container-info-basica">
        
    <h2>Informações Básicas</h2>
    <p>Defina o assunto e conteúdo da sua aula</p>
    <BaseInput id="assuntoAula" label="Assunto da Aula *" type="text" placeholder="Ex: Introdução ao React" v-model="assuntoAula" aria-disabled="false"/>
    <DescricaoInput id="descricaoAula" label="Descrição da Aula"/>
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
    }
}</script>
<style></style>