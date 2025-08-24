<template>
    <div class="login-container">
        <div class="login-card">
            <div class="login-icon">
                🎓
            </div>
            <h1 class="login-title">Novos Talentos</h1>
            <p class="login-paragraph">Faça login para acessar sua página de cursos!</p>

            <form @submit="loginSubmit" ref="loginForm">
                
                <BaseInput id="email" label="E-mail" type="email" placeholder="seu@email.com" v-model="email" />
                <BaseInput id="password" label="Senha" type="password" placeholder="Senha" v-model="password" pattern="^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$"/>
                <RadioInput v-model="userRole" />
                <button type="submit" class="login-button-submit">Entrar</button>
            </form>
        </div>
    </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import RadioInput from '@/components/RadioInput.vue'

export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
            userRole: '',
            route: ''
        }

    },
    components: {
        BaseInput,
        RadioInput,
        
    },
    methods: {
        loginSubmit() {
            const form = this.$refs.loginForm
            if(!form.checkValidity()){
                form.reportValidity()
                return
            }
            if (!this.userRole) {
                alert('Selecione o tipo de usuário.')
                return
            }
            alert('Login concluído com sucesso!!')
            this.$router.push('/homeAluno')
            
            this.$store.dispatch('saveLoginData',{
                email: this.email,
                password: this.password,
                userRole: this.userRole
            })
            
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=M+PLUS+Rounded+1c&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Archivo+Black&family=Bagel+Fat+One&family=Federant&display=swap');
*{
      font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.login-container {
    position: fixed;
    inset: 0;
    background-color: rgb(237, 220, 233);
    width: 100%;
    height: 100%;

}

.login-card {
    border-radius: 4px;
    margin: auto;
    margin-top: 15vh;
    width: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    padding-top: 20px;
    padding-bottom: 20px;
    border-style: solid;
    border-color: rgb(168, 8, 8);
    border-width: 2px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

.login-title {
    display: flex;
    justify-content: center;
    margin: auto;
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom-style: ridge;
    border-bottom-color: rgb(151, 4, 78);
    text-shadow: 0 0 3px rgb(151, 4, 78), 0 0 5px #FF0000;
    margin-bottom: 30px;
    font-family: "Black Ops One", system-ui;
    font-weight: 400;
    font-style: normal;
}
.login-paragraph{
    
    border-color: violet;
    border-style: solid;
    border-width: 1px;
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 4px;
    border-radius: 4px;
    margin-bottom: 20px;
    font-family: "Archivo Black", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;

}
.login-button-submit{
    margin-top: 20px;
    padding: 8px;
    padding-left: 32px;
    padding-right: 32px;
    background-color:rgb(151, 4, 78) ;
    border-style: groove;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.3s;
    border-color: violet;
    box-shadow: inset 0 0 10px violet;
}
.login-button-submit:hover{
    background-color:rgb(185, 50, 117);
    transform: scale(1.1);
    
}
</style>