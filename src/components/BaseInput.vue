<template>
    <div class="input-group">
        <label :for="id" class="label-only">{{ label }}</label>
        <input class="input-only" :id="id" :type="type" :placeholder="placeholder" :value="value"
            @input="handleInput" @invalid="handleInvalid" :required="required" :pattern="pattern">
    </div>
</template>
<script>
export default {
    name: 'BaseInput',
    props: {
        id: String,
        label: String,
        type: String,
        placeholder: String,
        value: String,
        pattern: String,
        required:Boolean
    },
    methods: {
        handleInput(event){
            event.target.setCustomValidity('')
            this.$emit('input', event.target.value)
        },
        handleInvalid(event) {
            if (!event.target.value) {
                event.target.setCustomValidity('Este campo precisa ser preenchido!')
            }
            else if (this.type === 'password') {
                    event.target.setCustomValidity('A senha precisa de pelo menos 8 letras, sendo pelo menos uma delas um símbolo especial e um número')
                }
            else if (this.type === 'email') {
                    event.target.setCustomValidity('Por favor, insira um e-mail válido!')
                }
            }
        }
}

</script>
<style>
.input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin: auto;
    padding: 10px;
}

.input-only {
    border: solid;
    border-color: rgb(151, 4, 78);
    border-radius: 8px;
    height: 30px;
    border-width: 2px;
    width: 100%;
    justify-content: center;
    margin: auto;
    background-color: rgb(255, 255, 255);
    font-family: "Black Ops One", system-ui;
    font-weight: 400;
    font-style: normal;
    box-shadow: 5px 5px 10px rgba(194, 61, 61, 0.3);
}

.label-only {
    margin-right: x;
}
</style>