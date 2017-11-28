<template>            
    <div :class="baseClass + '-container'">
        <option-button
            v-for="option in options"
            :key="option"
            :text="option"
            :handleClick="handleClick"
            :isSelected="isSelected(option)"
            :baseClass="baseClass"
            :activeClass="activeClass"
        />
        <slot></slot>
    </div>
</template>

<script>
import OptionButton from './OptionButton';

export default {
    components: {
        'option-button': OptionButton,
    },
    props: [
        'options',
        'selected',
        'handleClick',
        'baseClass',
        'activeClass',
    ],

    methods: {
        isSelected(option) {
            if (typeof option === 'string') {
                return option === this.selected;
            }
            return option.find(opt => opt === this.selected);
        },
    },


    computed: {

    },
};
</script>

<style scoped>
</style>