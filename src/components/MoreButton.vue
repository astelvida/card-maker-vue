<template>
    <button 
        class="next"
        :text="text" 
        @click.prevent="handleClick"
    >
        {{ text }}
    </button>
</template>

<script>
export default {
    props: [
        'showMore',
        'text',
    ],
    methods: {
        handleClick() {
            this.showMore();
        },
    },
};
</script>

<style scoped>
</style>

