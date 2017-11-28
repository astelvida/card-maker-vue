<template>
    <input
        class="picker"
        type="range" :max="max" :min="min" :step="step"
        :value="value"
        v-on:input="emitChange($event.target.value)"
        @focus="emitFocus($event.target)"
        @focusout="emitFocusOut($event.target)"
    />
</template>
        v-on:input="emitChange($event.target.value)"

<script>

export default {
    props: [
        // 'value',
        'max',
        'min',
        'step',
        'onChange',
    ],
    data() {
        return {
            value: 1,
        };
    },
    methods: {
        emitChange(value) {
            this.onChange(value);
        },
        emitFocus(target) {
            this.$emit('focus', target);
        },
        emitFocusOut(target) {
            this.$emit('focusout', target);
        },
    },
};
</script>

<style scoped>
</style>

