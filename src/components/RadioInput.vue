<template>
    <div class="role-group">
        <h2>Voce é: </h2>
        <label>
            <input type="radio" value="aluno" :checked="value === 'aluno'" @change="$emit('input', 'aluno')">
            Aluno
        </label>
        <label>
            <input type="radio" value="professor" :checked="value === 'professor'" @change="$emit('input', 'professor')">
            Aluno
        </label>
    </div>
</template>

<script>
export default {
    name: 'RadioInput',
    props: {
        value: String
    }
}
</script>
<style></style>