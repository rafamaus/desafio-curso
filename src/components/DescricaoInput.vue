<template>
    <div class="input-group">
        <label :for="id">{{ label }}</label>
        <textarea :required="required" @input="handleInput" :value="value" name="" :id="id" rows="12" class="textarea-only" placeholder="Descreva seu curso..."></textarea>
    </div>
</template>
<script>
export default{
    name: 'DescricaoInput',
    props:{
        id: String,
        label: String,
        value:String,
        required:Boolean
    },
    methods:{
        handleInput(event){
            this.$emit('input', event.target.value)
        }
    }
}
</script>


<style>
.textarea-only{
    resize: none;
  border: solid;
    border-color: rgb(151, 4, 78);
    border-radius: 8px;
    height: 100px; /* AUMENTE AQUI */
    border-width: 2px;
    width: 100%;
    justify-content: center;
    margin: auto;
    background-color: rgb(255, 255, 255);
    font-family: "Black Ops One", system-ui;
    font-weight: 400;
    font-style: normal;
    box-shadow: 5px 5px 10px rgba(194, 61, 61, 0.3);
    resize: none; /* Mantém sem redimensionamento */
}
</style>