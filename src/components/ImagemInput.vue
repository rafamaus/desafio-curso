<template>
    <div class="input-group">
        <label :for="id">{{ label }}</label>
        <input type="file" class="input-only" :id="id"  @change="handleInput" :required="required">

    </div>


</template>
<script>
export default{
    name: 'ImagemInput',
    props:{
        id: String,
        label: String,
        value:String,
        required:Boolean

    },
    methods:{
        handleInput(event){
            const files = event.target.files[0]
            if(!files){
                alert('Nâo selecionou nenhum arquivo')
                return
            }
            const reader = new FileReader()
            reader.onload = () => {
                this.$emit('input',reader.result)
            }
            reader.readAsDataURL(files)
        }
    },
    computed:{
         isAluno() {
            return this.$store.getters.isAluno
        },
        isProfessor() {
            return this.$store.getters.isProfessor
        },
    }



}</script>
<style></style>