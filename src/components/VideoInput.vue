<template>
    <div class="input-group">
        <label :for="id">{{ label }}</label>
        <input type="file" class="input-only" :id="id"  @change="handleInput" accept="video/*"  >

    </div>


</template>
<script>
export default{
    name: 'VideoInput',
    props:{
        id: String,
        label: String,
        value:Object
    },
    methods:{
        handleInput(event){
            const files = event.target.files[0]
            if(!files){
                alert('Nâo selecionou nenhum arquivo')
                return
            }
            const videoURL = URL.createObjectURL(files);
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.src = videoURL;
                
            video.onloadedmetadata = () => {
                const duracao = video.duration;
                URL.revokeObjectURL(videoURL);
                this.$emit('change', {
                    url: videoURL,
                    duracao
                })
                
            }
            
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