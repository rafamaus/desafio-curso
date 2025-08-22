<template>
    <div class="role-group">
        <h2>Voce é: </h2>
        <label>
            <input name="role" required type="radio" value="aluno" :checked="value === 'aluno'" @change="$emit('input', 'aluno')">
            Aluno
        </label>
        <label>
            <input name="role" required type="radio" value="professor" :checked="value === 'professor'" @change="$emit('input', 'professor')">
            Professor
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
<style>


</style>