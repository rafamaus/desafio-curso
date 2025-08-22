<template>
    <div>
       
    <h1>Bem vindo, {{ user.email }}!</h1>
    <p>Você está na página de {{user.userRole }}</p>
    <button>dsmakd</button>
      
        
    </div>

</template>
    

<script>

export default{
    name: 'HomeConditional',
    components: {
        
      
    },
    data(){
        return{

        }
    },
    computed:{
        user(){
            return this.$store.getters.getUserData
        }

    }
}
</script>


<style></style>