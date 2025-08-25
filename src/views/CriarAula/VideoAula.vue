<template>
    <div class="container-info-basica">
        <h2>Vídeo da Aula</h2>
        <p>Faça o upload do vídeo da aula</p>
        <VideoInput @change="updateVideoInfo" :value="videoAula" id="videoAula" label="Video da aula"/>
        
    </div>
</template>
<script>

import VideoInput from '@/components/VideoInput.vue';

export default{
    name:'VideoAula',
    components:{
        VideoInput
    },
    data(){
        return{
            video:{}
        }
    },
    props:{
        videoAula:String
    },
    methods:{
        updateVideoInfo(value){
            this.$emit('update:videoAula', value)
        }
       
    },
    watch: {
        videoAula: {
            immediate: true,
            handler(newVal) {
                this.video = newVal; 
            }
        },
        video: {
            deep: true,
            handler(newVal) {
                this.$emit('update:videoAula', newVal);
            }
    }
}
}
</script>
<style>
</style>