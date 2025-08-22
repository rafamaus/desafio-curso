<template>
    <header class="header-home">
        <img src="@/assets/logo.png" alt="Logo site de Cursos Implydemy">

        <input v-if="isAluno" type="text" placeholder="Pesquisar cursos" class="input-pesquisa">

        <button v-if="isProfessor" @click="criarCurso">Criar curso</button>

        <nav></nav>



    </header>

</template>
<script></script>
<style></style>