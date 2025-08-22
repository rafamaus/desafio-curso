<template>
    <footer class="footer-home">
        <div class="div-footer-home">
            <img src="@/assets/generic.png" alt="Logo Implydemy">
            <p>© 2025 Sua Plataforma – todos os direitos reservados</p>
        </div>
    </footer>

</template>
<script>
export default{
    name: 'HomeFooter',

}
</script>
<style>
.footer-home{
    background-color: rgb(168, 8, 8);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    left: 0;
    bottom: 0;
}
.div-footer-home{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>