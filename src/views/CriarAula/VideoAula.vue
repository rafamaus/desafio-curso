<template>
    <div class="container-info-basica">
        <h2>Vídeo da Aula</h2>
        <p>Faça o upload do vídeo da aula</p>
        <ImagemInput id="videoAula" label="Video da aula"/>
    </div>
</template>
<script>
import ImagemInput from '@/components/ImagemInput.vue';

export default{
    name:'VideoAula',
    components:{
        ImagemInput
    }
}
</script>
<style>
</style>