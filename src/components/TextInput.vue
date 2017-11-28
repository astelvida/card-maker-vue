<template>   
    <input
        class="text"
        type="text" placeholder="astelvida"
        @input="emitChange($event.target.value)"
    />
</template>

<script>
export default {
    methods: {
        emitChange(value) {
            this.$emit('input', value);
        },
    },
};
</script>

<style>
</style>

