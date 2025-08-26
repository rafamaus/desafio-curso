<template>
    <div class="container-home-global">
        <h1>Cadastrar Novo Curso</h1>
        <p>Crie e configure seu curso em 3 etapas simples</p>
        <div v-show="etapa===0" class="etapa-zero-container">
            <div class="div-curso-icon">
                <img src="@/assets/livroIcon.svg" alt="Ícone etapa 0" class="cadastro-curso-icon" style="background-color: red;">
                <img src="@/assets/videoIcon.svg" alt="Ícone etapa 1" class="cadastro-curso-icon" style="background-color: gray;">
                <img src="@/assets/calendarioIcon.svg" alt="Ícone etapa 2" class="cadastro-curso-icon" style="background-color: gray;">
            </div>
            
                <InfoBasica ref="infoBasicaRef"
                    :nomeCurso="infoBasica.nomeCurso"
                    @update:nomeCurso="infoBasica.nomeCurso = $event"
                    :categoriaCurso="infoBasica.categoriaCurso"
                    @update:categoriaCurso="infoBasica.categoriaCurso = $event"
                    :imagemCurso="infoBasica.imagemCurso"
                    @update:imagemCurso="infoBasica.imagemCurso = $event"
                    :descricaoCurso="infoBasica.descricaoCurso"
                    @update:descricaoCurso="infoBasica.descricaoCurso = $event"
                
                />
          

            <div class="div-antes-depois">
                <button class="btn-antes-depois"  style="background-color: gray;">Voltar</button>
                <button class="btn-antes-depois" @click="proximaEtapa1" style="background-color: red;">Prosseguir</button>
            </div>
        </div>
        <div v-show="etapa===1" class="etapa-zero-container">
            <div class="div-curso-icon">
                <img src="@/assets/livroIcon.svg" alt="Ícone etapa 0" class="cadastro-curso-icon" style="background-color: red;">
                <img src="@/assets/videoIcon.svg" alt="Ícone etapa 1" class="cadastro-curso-icon" style="background-color: red;">
                <img src="@/assets/calendarioIcon.svg" alt="Ícone etapa 2" class="cadastro-curso-icon" style="background-color: gray;">
            </div>
            
            <VinculoAulas ref="vinculoAulasRef"
                :aulasSelecionadas="aulas.aulasSelecionadas"
                @update:aulasSelecionadas="aulas.aulasSelecionadas = $event" 
            />
            <div class="div-antes-depois">
                <button class="btn-antes-depois" @click="voltaEtapa" style="background-color: red;">Voltar</button>
                <button class="btn-antes-depois" @click="proximaEtapa2" style="background-color: red;">Prosseguir</button>
            </div>
        </div>
        <div v-show="etapa===2" class="etapa-zero-container">
            <div class="div-curso-icon">
                <img src="@/assets/livroIcon.svg" alt="Ícone etapa 0" class="cadastro-curso-icon" style="background-color: red;">
                <img src="@/assets/videoIcon.svg" alt="Ícone etapa 1" class="cadastro-curso-icon" style="background-color: red;">
                <img src="@/assets/calendarioIcon.svg" alt="Ícone etapa 2" class="cadastro-curso-icon" style="background-color: red;">
            </div>
            
            <PeriodoAcesso ref="periodoAcessoRef"
                :dataInicio="periodo.dataInicio"
                @update:dataInicio="periodo.dataInicio = $event"
                 :dataTermino="periodo.dataTermino"
                @update:dataTermino="periodo.dataTermino = $event"
                :nomeCurso="infoBasica.nomeCurso"
                :categoriaCurso="infoBasica.categoriaCurso"
                :numeroAulas="aulas.aulasSelecionadas.length"
            />
            <div class="div-antes-depois">
                <button class="btn-antes-depois" @click="voltaEtapa" style="background-color: red;">Voltar</button>
                <button class="btn-antes-depois" @click="criarCurso" style="background-color: pink;">Criar Curso</button>
            </div>
        </div>
    
    </div>
</template>
<script>
import InfoBasica from './InfoBasica.vue';
import PeriodoAcesso from './PeriodoAcesso.vue';
import VinculoAulas from './VinculoAulas.vue';

export default{
    name: 'CadastroCurso',
    data(){
        return{
            etapa: 0,
            infoBasica:{
                nomeCurso:'',
                categoriaCurso:'',
                imagemCurso:'',
                descricaoCurso:''
            },
            aulas:{
                aulasSelecionadas:[]
            },
            periodo:{
                dataInicio:'',
                dataTermino:'',
            },
            alunosInscritos:[],
            slug:'',
            slugCategoria:''
        }
    },
    components: {
        InfoBasica,
        VinculoAulas,
        PeriodoAcesso

        
    },
    methods:{
        adicionarAula(aula) {
            const jaExiste = this.aulas.aulasSelecionadas.some(a => a.assunto === aula.assunto);
            if (!jaExiste) {
            this.aulas.aulasSelecionadas.push(aula);
            }
        },
        removerAula(aula) {
            this.aulas.aulasSelecionadas = this.aulas.aulasSelecionadas.filter(
            a => a.assunto !== aula.assunto
            );
        },
        voltaEtapa(){
            this.etapa = this.etapa-1
        },
        proximaEtapa1(){
            const infoBasica=this.infoBasica
            if(infoBasica.nomeCurso && infoBasica.categoriaCurso && infoBasica.descricaoCurso && infoBasica.imagemCurso){
                this.etapa = this.etapa+1
            }
            else{
                alert("Preencha todos os campos!!")
            }
        },
        proximaEtapa2(){
            if(this.aulas.aulasSelecionadas.length!=0){
                this.etapa = this.etapa+1
            }
            else{
                alert("Escolha ao menos uma aula!!")
            }
        },
        formataData(dataVelha){
            const data = new Date(dataVelha)
            const dia = String(data.getDate()).padStart(2,'0')
            const mes = String(data.getMonth()).padStart(2,'0')
            const ano = String(data.getFullYear())
            return `${dia}/${mes}/${ano}`

        },
        criarCurso(){
            const hoje = new Date
            const dataInicio = new Date(this.periodo.dataInicio)
            const dataTermino = new Date(this.periodo.dataTermino)

            if(!this.periodo.dataInicio || !this.periodo.dataTermino){
                alert("As duas datas devem ser preenchidas!!")
                return
            }
            else if(dataInicio <= hoje){
                alert('A data de início deve ser após a data atual!')
                return
            }
                else if(dataTermino <=dataInicio){
                    alert("A data de término deve ser após a data de ínicio")
                }

            this.slug = this.infoBasica.nomeCurso.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim()
            this.slugCategoria = this.infoBasica.categoriaCurso.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim()

            const cursoCompleto={
                
                infoBasica: this.infoBasica,
                aulas:this.aulas,
                periodo:{
                    dataInicio:this.formataData(this.periodo.dataInicio),
                    dataTermino:this.formataData(this.periodo.dataTermino)
                },
                alunosInscritos:this.alunosInscritos,
                slug: this.slug,
                slugCategoria:this.slugCategoria
            }

            this.$store.dispatch('saveCurso', cursoCompleto)
            alert('Curso criado com sucesso!!')

            this.$router.push('/home')

        }
    }
}


</script>
<style>
.cadastro-curso{
    border-style: solid;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 70%;
    width: 70%;
    margin: auto;
}
.cadastro-curso-icon{
    border-radius: 50%;
    padding: 10px;
    margin-right: 5px;
    margin-left: 5px;
}
.div-curso-icon{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;

}
.etapa-zero-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 20px;
}
.div-antes-depois{
    
    display: flex;
    flex-direction: row;
    gap:100px;
    align-items: center;
    margin-bottom: 30px;
}
.btn-antes-depois{
    border-style: inset;
    border-color: red;
    border-radius: 4px;
    transition: transform 0.3s;
}
.btn-antes-depois:hover{
    transform: scale(1.1);

}
</style>