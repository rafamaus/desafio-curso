<template>
    <div class="container-home-global">
        <h1>Edite seu Perfil</h1>
        <div class="div-box-perfil">
           
        <form @submit="verificarEdicaoDados" ref="edicaoPerfilForm">
            <BaseInput v-model="novoEmail" label="Edite seu email:" id="editaEmail" type="email" :placeholder="getUserData.email" required/>
            <BaseInput v-model="novaSenha" label="Edite sua senha:" id="editaSenha" type="password" placeholder="Digite uma nova senha..." pattern="^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$"/>
            <button type="submit" class="btn-acoes">Salvar Edição</button>
        </form>
         
        </div>
    </div>

</template>
<script>
import BaseInput from '@/components/BaseInput.vue';


export default {
    name: 'PerfilPage',
    data(){
        return{
            novoEmail:'',
            novaSenha:''

        }

    },
    components:{
        BaseInput
    },
    computed:{
        getUserData(){
            return this.$store.getters.getUserData
        }
    },
    methods:{
        verificarEdicaoDados(){
            const form = this.$refs.edicaoPerfilForm
            if(!form.checkValidity()){
                form.reportValidity()
                return
            }
            alert('Perfil editado com sucesso!')
            
            
            this.$store.dispatch('saveLoginData',{
                email: this.novoEmail,
                password: this.novaSenha,
                userRole: this.getUserData.userRole
            })
        }
    }
}

</script>
<style>
.div-box-perfil {
    border-style: solid;
    width: 90%;
    border-style: solid;
    border-radius: 16px;
    margin-bottom: 40px;
    padding: 5px;
    border-color: rgb(246, 146, 224);

    background-color:rgba(220, 122, 171, 0.484) ;
    border-color: violet;
    box-shadow: inset 0 0 10px violet;

}
</style>