<template>
    <div class="login-container">
        <div class="login-card">
            <div class="login-icon">
                🎓
            </div>
            <h1 class="login-title">Novos Talentos</h1>
            <p class="login-paragraph">Faça login para acessar sua página de cursos!</p>

            <form @submit="loginSubmit">
                <BaseInput id="email" label="E-mail" type="email" placeholder="seu@email.com" v-model="email" />
                <BaseInput id="password" label="Senha" type="password" placeholder="Senha" v-model="password" />
                <RadioInput v-model="userRole" />
                <button type="submit">Entrar</button>
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
            if (!this.userRole) {
                alert('Selecione o tipo de usuário.')
                return
            }
            if (this.userRole === 'aluno') this.$router.push('/homeAluno')
            else this.$router.push('/homeProfessor')
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=M+PLUS+Rounded+1c&display=swap');

.login-container {
    position: fixed;
    inset: 0;
    background-color: rgb(214, 235, 241);
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
    box-shadow: inset 0 0 10px violet;
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 4px;
    border-radius: 4px;
}
</style>