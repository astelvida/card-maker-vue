<template>            
    <button
        :class="[baseClass, isSelected ? activeClass: '']"
        @click.prevent="onClick"
    >
        {{ text }}
    </button>
</template>

<script>
export default {
    props: [
        'text',
        'handleClick',
        'isSelected',
        'baseClass',
        'activeClass',
    ],

    methods: {
        onClick(e) {
            this.handleClick(e.target.innerText);
        },
    },
};
</script>

<style >
</style>