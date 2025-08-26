<template>
    <div class="container-home-global">
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
                <button class="btn-antes-depois" @click="proximaEtapa1" style="background-color: red;">Prosseguir</button>
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
        proximaEtapa1(){
            if(this.assuntoAula && this.descricaoAula && this.duracaoAula){
                const verificarDuracao = /^\d+$/.test(this.duracaoAula)
                if(verificarDuracao){
                this.etapa = this.etapa+1
                }
            }
            else{
                alert("Preencha todos os campos!!")
            }
        },
        criarAula(){
            if(!this.videoAula){
                alert("É necessário carregar um vídeo!!")
                return
            }
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