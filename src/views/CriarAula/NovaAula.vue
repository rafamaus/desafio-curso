<template>
    <div class="nova-aula">
        <h1>Criar Nova Aula</h1>
        <p>Preencha as informações da sua aula em 2 etapas simples</p>
        <div v-if="etapa===0" class="etapa-zero-container">
            <InfoBasicaAula
                :assuntoAula="assuntoAula"
                @update:assuntoAula="assuntoAula=$event"

                :descricaoAula="descricaoAula"
                @update:descricaoAula="descricaoAula=$event"

                :duracaoAula="duracaoAula"
                @update:duracaoAula="duracaoAula=$event"
            />
            <div class="div-antes-depois">
                <button class="btn-antes-depois" @click="voltaEtapa" style="background-color: gray;">Voltar</button>
                <button class="btn-antes-depois" @click="proximaEtapa" style="background-color: red;">Prosseguir</button>
            </div>
            
        </div>
        <div v-if="etapa ===1" class="etapa-zero-container">
            <VideoAula
                :videoAula="videoAula"
                @update:videoAula="videoAula=$event"
            />
              <div class="div-antes-depois">
                <button class="btn-antes-depois" @click="voltaEtapa" style="background-color: red;">Voltar</button>
                <button class="btn-antes-depois" @click="criarAula" style="background-color: gray;">Criar Aula</button>
            </div>

        </div>
        
        


    </div>
</template>
<script>
import InfoBasicaAula from './InfoBasicaAula.vue';
import VideoAula from './VideoAula.vue';
export default{
    name:'NovaAula',
    data(){
        return{
            etapa:0,
            assuntoAula:'',
            descricaoAula:'',
            duracaoAula: '',
            videoAula: '',
            concluida: 'Não'
        }
    },
    components:{
        InfoBasicaAula,
        VideoAula
       
    },
    methods:{
        voltaEtapa(){
            this.etapa = this.etapa-1
        },
        proximaEtapa(){
            this.etapa = this.etapa+1
        },
        criarAula(){
            const aulaCompleta={
                assuntoAula:this.assuntoAula,
                descricaoAula:this.descricaoAula,
                duracaoAula:this.duracaoAula,
                videoAula:this.videoAula,
                concluida:this.concluida
            }
            this.$store.dispatch('saveAula', aulaCompleta)
            alert('aula criada com sucesso ')
            this.$router.push('/cadastro-curso')
        }
    }
}
</script>
<style>
.nova-aula{
    border-style: solid;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 70%;
    width: 70%;
    margin: auto;
}</style>