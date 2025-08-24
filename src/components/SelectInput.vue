<template>
    <div class="input-group">
        <label :for="id" v-if="isProfessor"  class="label-only">{{ label }}</label>
            
            <select name="categoriaCurso" :id="id" class="input-only" @change="handleInput">
                <option disabled selected hidden value=""></option>
                <option v-for="(categoria,index) in getCategorias" :key="index" :value="categoria" >{{ categoria }}</option>
                
            </select>
    </div>
   
    
</template>
<script>

export default{
    name:'SelecInput',
    
    methods:{
        handleInput(event){
            this.$emit('input', event.target.value)
        }

    }, 
    props:{
        id: String,
        label: String,
        value:String

    },
    computed: {
        isAluno() {
            return this.$store.getters.isAluno
        },
        isProfessor() {
            return this.$store.getters.isProfessor
        },
        getCategorias(){
            return this.$store.getters.getCategorias
        },
        

    }

}
</script>
<style>

</style>

