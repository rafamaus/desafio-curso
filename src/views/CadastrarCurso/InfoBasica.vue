<template>
    <div class="container-info-basica">
    <h2>Etapa 1: Informações Básicas</h2>
    <p>Defina as informações básicas do seu curso</p>
    <BaseInput :value="nomeCurso" @input="updateNomeCurso" id="nomeCurso" label="Nome Curso" type="text" placeholder="Ex: Desenvolvimento Web Completo"  aria-disabled="false"/>
    <SelectInput :value="categoriaCurso" @input="updateCategoriaCurso" id="categoriaCurso" label="Categoria"/>
    <ImagemInput  :value="imagemCurso" @input="updateImagemCurso" id="imagemCurso" label="Imagem Curso"/>
    <DescricaoInput :value="descricaoCurso" @input="updateDescricaoCurso" id="descricaoCurso" label="Descrição do Curso"/>

    </div>


</template>
<script>
import BaseInput from '@/components/BaseInput.vue';
import DescricaoInput from '@/components/DescricaoInput.vue';
import ImagemInput from '@/components/ImagemInput.vue';
import SelectInput from '@/components/SelectInput.vue';
export default{
    name:'InfoBasica',
    components:{
        BaseInput,
        SelectInput,
        ImagemInput,
        DescricaoInput

    },
    props:{
        nomeCurso:String,  
        categoriaCurso: String,
        imagemCurso:String,
        descricaoCurso:String

    },
    data(){
        return{
            
        }
    },
    methods:{
        getCursoInfo(){
            return {
                nome: this.nomeCurso,
                categoria: this.categoriaCurso,
                imagem: this.imagemCurso,
                descricao: this.descricaoCurso
            }
        },
        updateNomeCurso(value) {
            this.$emit('update:nomeCurso', value)
            },
        updateCategoriaCurso(value) {
            this.$emit('update:categoriaCurso', value)
            },
        updateImagemCurso(value) {
            this.$emit('update:imagemCurso', value)
            },
        updateDescricaoCurso(value) {
            this.$emit('update:descricaoCurso', value)
            }
    }
}

</script>
<style>
.container-info-basica{
   width: 80%;
  max-width: 800px;
  min-width: 300px;
  border-style: solid;
  padding: 20px;
  box-sizing: border-box;
}
</style>