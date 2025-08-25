<template>
    <div>
        <div class="div-box-perfil">
            <h1>Edite seu Perfil</h1>
        </div>
        <form>
        <BaseInput label="Edite seu email:" id="editaEmail" type="email" placeholder="Digite um novo e-mail..."/>
        <BaseInput label="Edite sua senha:" id="editaSenha" type="passwrpd" placeholder="Digite uma nova senha..." pattern="^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$"/>
        </form>
    </div>

</template>
<script>
import BaseInput from '@/components/BaseInput.vue';


export default {
    name: 'PerfilPage',
    components:{
        BaseInput
    }
}

</script>
<style>
.div-box-perfil {
    border-style: solid;
}
</style>